import { Request, Response } from 'express';
import { getJobs, getBidsByJobId, addJob, getJob } from '../database';
import { IJob } from '../database/types';
import { applyBidsToJobs } from './utils';

const controller = { 
    getJobs: async (req: Request, res: Response) => {
        getJobs((err: { message: any; }, jobs: any) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            // problably better to use knex to organize the jobs
            const jobsWithBids = applyBidsToJobs(jobs);   
            res.send(jobsWithBids);
        })
    },
    getJob: async (req: Request, res: Response) => {
        const { id } = req.params;
        getJob(id, (err: { message: any; }, job: any) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (job.length === 0) {
                res.status(404).json({ error: `Job ${id} not found` });
                return
            } 
            res.send(job[0]);
        })
    },
    getBidsByJobId: async (req: Request, res: Response) => {
        const { id } = req.params;
        getBidsByJobId(parseInt(id), (err: { message: any; }, bids: any) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.send(bids);
        })
    },
    addJob: (req: Request, res: Response) => {
        const { title, description, requirements, name, email, phone, expiration }: IJob = req.body;
        if (typeof name === "undefined") {
            res.status(400).json({ error: 'Please provide a job poster name' });
            return;
        }
    
        const timeCreated = new Date().toISOString();
  
        addJob({ title, description, requirements, name, email, phone, expiration, timeCreated }, (err: { message: any; }) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ message: 'Job added' });
        });
    }
};

export default controller;
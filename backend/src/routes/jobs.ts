import express, { Request, Response } from 'express';
import { addJob, getJobs, getJob, getBidsByJobId } from '../database';
import { IJob } from '../database/types';

const router = express.Router();

// API route to get jobs
router.get('', async (req: Request, res: Response) => {
  getJobs((err: { message: any; }, jobs: any) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.send(jobs);
  })
});

// API route to get job by id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  getJob(parseInt(id), (err: { message: any; }, job: any) => {
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
});

// API route to get bids by a job id
router.get('/:id/bids', async (req: Request, res: Response) => {
  const { id } = req.params;
  getBidsByJobId(parseInt(id), (err: { message: any; }, bids: any) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.send(bids);
  })
});

// API route to add a job
router.post('', (req: Request, res: Response) => {
  const { title, description, requirements, name, email, phone, expiration }: IJob = req.body;
  if (typeof name === "undefined") {
    res.status(400).json({ error: 'Please provide a job poster name' });
    return;
  }

  addJob({ title, description, requirements, name, email, phone, expiration }, (err: { message: any; }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: 'Job added' });
  });
});

export default router;
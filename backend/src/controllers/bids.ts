import { Request, Response } from 'express';
import { addBid, getJob } from '../database';

const controller = { 
    addBid: (req: Request, res: Response) => {
        const { amount } = req.body;
        const { id } = req.params;
        if (typeof amount === "undefined") {
            res.status(400).json({ error: 'Please provide a job bid amount' });
            return;
        }
    
        // make sure job exists before allowing bid to be added
        getJob(id, (err: { message: any; }, job: any) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }//
            if (job.length === 0) {
                res.status(404).json({ error: `Job ${id} not found for bid` });
                return
            } 
        })

        const timeCreated = new Date().toISOString();
    
        addBid(id, amount, timeCreated, (err: { message: any; }) => {
            if (err) {
            res.status(500).json({ error: err.message });
            return;
            }
            res.status(200).json({ message: 'Job added' });
        });
    }
}

export default controller;

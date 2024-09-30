import express from 'express';
import controller from '../controllers/jobs';
import bid_controller from "../controllers/bids";

const router = express.Router();

// API route to get jobs
router.get('', controller.getJobs);

// API route to get job by id
router.get('/:id', controller.getJob);

// API route to get bids by a job id
router.get('/:id/bids', controller.getBidsByJobId);

// API route to add a job
router.post('', controller.addJob);

// API route to add a bid
router.post('/:id/bids', bid_controller.addBid);

export default router;
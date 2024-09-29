import express from 'express';
import controller from '../controllers/jobs';

const router = express.Router();

// API route to get jobs
router.get('', controller.getJobs);

// API route to get job by id
router.get('/:id', controller.getJob);

// API route to get bids by a job id
router.get('/:id/bids', controller.getBidsByJobId);

// API route to add a job
router.post('', controller.addJob);

export default router;
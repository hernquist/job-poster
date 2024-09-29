import express from 'express';
import controller from '../controllers/bids';

const router = express.Router();

// API route to add a bid
router.post('', controller.addBid);

export default router;
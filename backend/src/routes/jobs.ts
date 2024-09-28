import express, { Request, Response } from 'express';
import { addJob, getJobs } from '../database';

const router = express.Router();

// API route to get jobs
router.get('', async (req: Request, res: Response) => {
  getJobs((err: { message: any; }, rows: any) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.send(rows);
  })
});

// API route to add a job
router.post('', (req: Request, res: Response) => {
  const { description, requirements, name, email, phone } = req.body;
  if (name === undefined) {
    res.status(400).json({ error: 'Please provide a name' });
    return;
  }
  addJob({ description, requirements, name, email, phone }, (err: { message: any; }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: 'Job added' });
  });
});

// // API route to delete a user
// router.delete('/:id', (req: Request, res: Response) => {
//   const { id } = req.params;
//   deleteUser (parseInt(id), (err: { message: any; }) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.status(200).json({ message: 'User deleted' });
//   });
// });

export default router;
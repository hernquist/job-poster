import express, { Request, Response } from 'express';
import { addUser, deleteUser, getUsers } from '../database';

const router = express.Router();

// API route to get users
router.get('', async (req: Request, res: Response) => {
  getUsers((err: { message: any; }, rows: any) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.send(rows);
  })
});

// API route to add a user
router.post('', (req: Request, res: Response) => {
  const { id, name } = req.body;
  if (id === undefined || name === undefined) {
    res.status(400).json({ error: 'Please provide an id and name' });
    return;
  }
  addUser(id, name, (err: { message: any; }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: 'User added' });
  });
});

// API route to delete a user
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  deleteUser(parseInt(id), (err: { message: any; }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: 'User deleted' });
  });
});

export default router;
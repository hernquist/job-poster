import express, { Request, Response } from 'express';
import usersRoutes from './routes/users';
import { addUser, deleteUser, getUsers } from './database';

const app = express();
app.use(express.json())

const port = 3001;

// routing
app.use('/test', usersRoutes);



// API route to get users
app.get('/users', async (req: Request, res: Response) => {
  getUsers((err: { message: any; }, rows: any) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.send(rows);
  })
});

// API route to add a user
app.post('/users', (req: Request, res: Response) => {
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
app.delete('/users/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  deleteUser (parseInt(id), (err: { message: any; }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: 'User deleted' });
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import express from 'express';
import usersRoutes from './routes/users';

const app = express();
app.use(express.json())

const port = 3001;

// routing
app.use('/users', usersRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});

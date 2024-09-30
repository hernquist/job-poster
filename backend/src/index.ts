import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users';
import jobsRoutes from './routes/jobs';

const app = express();

// for development
app.use(cors())
app.use(express.json())

const port = 3001;

// routing
app.use('/users', usersRoutes);
app.use('/jobs', jobsRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});

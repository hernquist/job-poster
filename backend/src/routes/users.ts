import express from 'express';
import controller from '../controllers/users';

const router = express.Router();

// API route to get users
router.get('', controller.getUsers);

// API route to add a user
router.post('', controller.addUser);

// API route to delete a user
router.delete('/:id', controller.deleteUser);

export default router;
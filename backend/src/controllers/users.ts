import { Request, Response } from 'express';
import { addUser, deleteUser, getUsers } from '../database';

const controller = { 
    getUsers: async (req: Request, res: Response) => {
        getUsers((err: { message: any; }, rows: any) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.send(rows);
        });
    },
    addUser: async (req: Request, res: Response) => {
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
    },
    deleteUser: async (req: Request, res: Response) => {
        const { id } = req.params;
        deleteUser(parseInt(id), (err: { message: any; }) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ message: 'User deleted' });
        });
    }
}

export default controller;
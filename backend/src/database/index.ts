import sqlite3 from 'sqlite3';
import { IJob } from './types';

// Create and setup the SQLite database
const db = new sqlite3.Database(':memory:');

const seededData = {
    users: `VALUES (1, "John Doe"), (2, "Jane Doe")`,
    jobs: `VALUES ("Seeded job", "Job description", "Job requirements", "John Poster", "j.poster@mail.com", "123456789", "2024-10-1 20:14:09.123")`,
    bids: `VALUES (1, 1, 100), (1, 1, 200), (1, 2, 150), (2, 1, 300)`
};

db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');
  db.run('INSERT INTO users (id, name) ' + seededData.users);
  db.run('CREATE TABLE jobs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, requirements TEXT, name TEXT, email TEXT, phone TEXT, expiration TEXT)');
  db.run('INSERT INTO jobs (title, description, requirements, name, email, phone, expiration) ' + seededData.jobs);
  db.run('CREATE TABLE bids (id INTEGER PRIMARY KEY AUTOINCREMENT, job_id INT, user_id INT, amount INT, FOREIGN KEY(job_id) REFERENCES jobs(id))');
  db.run('INSERT INTO bids (job_id, user_id, amount) ' + seededData.bids);
})

export function getUsers(callback: any) {
    const query = 'SELECT * FROM users';
    db.all(query, [], callback)
}

export function deleteUser(id: number, callback: any) {
    const query = 'DELETE FROM users WHERE id = ?';
    db.run(query, [id], callback)
}

export function addUser(id: number, name: string, callback: any) {
    const query = 'INSERT INTO users (id, name) VALUES (?, ?)';
    db.run(query, [id, name], callback)
}

export function getJobs(callback: any) {
    const query = 'SELECT * FROM jobs';
    db.all(query, [], callback)
}

export function getJob(id: number, callback: any) {
    const query = 'SELECT * FROM jobs WHERE id = ?';
    db.all(query, [id], callback)
}

export function addJob({ title, description, requirements, name, email, phone, expiration }: IJob, callback: any) {
    const query = 'INSERT INTO jobs (title, description, requirements, name, email, phone, expiration) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.run(query, [title, description, requirements, name, email, phone, expiration], callback)
}

export function getBidsByJobId(jobId: number, callback: any) {
    const query = 'SELECT * FROM bids WHERE job_id = ?';
    db.all(query, [jobId], callback)
}

export function addBid(jobId: number, amount: number, callback: any) {
    const userId = 1; // Assume the user is always 1 for now
    const query = 'INSERT INTO bids (job_id, user_id, amount) VALUES (?, ?, ?)';
    db.run(query, [jobId, userId, amount], callback)
}

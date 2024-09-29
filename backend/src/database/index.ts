import sqlite3 from 'sqlite3';
import { IJobDB } from './types';
import seededData from './seeds';

// Create and setup the SQLite database
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');
  db.run('INSERT INTO users (id, name) ' + seededData.users);
  db.run('CREATE TABLE jobs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, requirements TEXT, name TEXT, email TEXT, phone TEXT, expiration TEXT, timeCreated TEXT)');
  db.run('INSERT INTO jobs (title, description, requirements, name, email, phone, expiration, timeCreated) ' + seededData.jobs);
  db.run('CREATE TABLE bids (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INT, amount INT, job_id INTEGER, FOREIGN KEY(job_id) REFERENCES jobs(id))');
  db.run('INSERT INTO bids (user_id, amount, job_id) ' + seededData.bids);
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
    const query = `
    SELECT jobs.id as 
    jobId, title, description, requirements, name, email, phone, 
    bids.amount as bidsAmount, bids.user_id as bidsUserId, bids.id as bidsId 
    FROM jobs LEFT JOIN bids 
    ON jobs.id = bids.job_id`;
    db.all(query, [], callback)
}

export function getJob(id: number, callback: any) {
    const query = 'SELECT * FROM jobs WHERE id = ?';
    db.all(query, [id], callback)
}

export function addJob({ title, description, requirements, name, email, phone, expiration, timeCreated }: IJobDB, callback: any) {
    const query = 'INSERT INTO jobs (title, description, requirements, name, email, phone, expiration, timeCreated) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.run(query, [title, description, requirements, name, email, phone, expiration, timeCreated], callback)
}

export function getBidsByJobId(jobId: number, callback: any) {
    const query = 'SELECT * FROM bids WHERE job_id = ?';
    db.all(query, [jobId], callback)
}

export function addBid(jobId: number, amount: number, callback: any) {
    const userId = 1; // Assume the user is always 1 for now
    const query = 'INSERT INTO bids (user_id, amount, job_id) VALUES (?, ?, ?)';
    db.run(query, [userId, amount, jobId], callback)
}

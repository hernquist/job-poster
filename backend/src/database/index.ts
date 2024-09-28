import sqlite3 from 'sqlite3';

// Create and setup the SQLite database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');
  db.run('INSERT INTO users (id, name) VALUES (1, "John Doe")');
  db.run('CREATE TABLE jobs (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, requirements TEXT, name TEXT, email TEXT, phone TEXT, expiration TEXT)');
  db.run('INSERT INTO jobs (description, requirements, name, email, phone, expiration) VALUES ("Job description", "Job requirements", "John Poster", "j.poster@mail.com", "123456789", "2024-10-1 20:14:09.123")');
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

export function addJob({ description, requirements, name, email, phone, expiration }: { description: string, requirements: string, name: string, email: string, phone: string, expiration: string}, callback: any) {
    const query = 'INSERT INTO jobs (description, requirements, name, email, phone, expiration) VALUES (?, ?, ?, ?, ?, ?)';
    db.run(query, [description, requirements, name, email, phone, expiration], callback)
}

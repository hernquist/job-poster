import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostJob() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [expiration, setExpiration] = useState('');
    const navigate = useNavigate();

    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Handle form submission logic here
        const response = await fetch('http://localhost:3001/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS"
            },
            body: JSON.stringify({ 
                title, description, requirements, name, email, phone, expiration
                // description, requirements, name, email, phone, expiration
            }),
        });
      
        const result = await response.json();
        if (result.message) {
            setMessage(result.message);
            setTimeout(() => {
                navigate('/');
            }, 2000);
        };
    }

    if (message) {
        return (
            <div>
                <h1>Success</h1>
                <p>{message}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Post a Job</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Job Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Job Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="requirements">Job Requirements:</label>
                    <textarea
                        id="requirements"
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="expiration">Job Expiration:</label>
                    <input
                      id="expiration"
                      value={expiration}
                      onChange={(e) => setExpiration(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Job Posted By:</label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostJob;
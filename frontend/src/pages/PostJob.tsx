import React, { useState } from 'react';

function PostJob() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Job title:', title);
        console.log('Job description:', description);
    };

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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostJob;
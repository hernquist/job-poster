import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function PostBid() {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const { pathname} = useLocation();
    function getJobId (pathname: string) {
        return pathname.split('/')[2]
    }
    const navigate = useNavigate();

    const userId = 1;

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Handle form submission logic here
        const response = await fetch(`http://localhost:3001/jobs/${getJobId(pathname)}/bids`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                userId, amount, jobId: getJobId(pathname) 
            }),
        });
      
        const result = await response.json();

        // navigate to the home "job" page
        if (result.message) {
            setMessage(result.message);
            setTimeout(() => {
                navigate('/');
            }, 2000);
        };
    }

    if (message) {
        return (
            <>
                <h1>Success!</h1>
                <p>{message}</p>
            </>
        );
    }

    return (
        <div>
            <h1>Post a Job</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Amount:</label>
                    <input
                        type="text"
                        id="title"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostBid;
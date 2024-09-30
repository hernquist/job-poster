import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ShowJob from '../components/ShowJob';
import { getJobId } from '../components/utils';

const styles = `
h1 {
    text-align: center;
    font-size: 2em;
}
    
p {
    text-align: center;
    font-size: 1.2em;
}

input[type=number] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=number]:focus {
    background-color: lightblue;
    border: 3px solid #555;
}

button[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
    
button[type=submit]:hover {
    background-color: #45a049;
}
    
div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 6px;
}
`;

function PostBid() {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const location = useLocation();
    const { pathname, state } = location;

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
                <style dangerouslySetInnerHTML={{ __html: styles }} />
                <h1>Success!</h1>
                <p>{message}</p>
            </>
        );
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <div>
                <h1>Post a Bid--</h1>
                <ShowJob job={state.job} hidePostBid />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Amount:</label>
                        <input
                            id="title"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <button disabled={!amount} type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default PostBid;
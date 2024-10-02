import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = `
h1 {
    text-align: center;
    font-size: 2em;
}

p {
    text-align: center;
    font-size: 1.2em;
}

input[type=text], input[type=email], input[type=phone] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=text]:focus, input[type=email]:focus, input[type=phone]:focus {
    background-color: lightblue;
    border: 3px solid #555;
}

textarea {
  width: 100%;
  height: 80px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}

textarea:focus {
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
`

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
                            placeholder="Job description.."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                    </div>
                    <div>
                        <label htmlFor="requirements">Job Requirements:</label>
                        <textarea
                            id="requirements"
                            placeholder="2 years experience, etc.."
                            value={requirements}
                            onChange={(e) => setRequirements(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="expiration">Job Expiration: </label>
                        <input
                            id="expiration"
                            placeholder='MM/DD/YYYY...'
                            type="date"
                            value={expiration}
                            onChange={(e) => setExpiration(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Job Posted By:</label>
                        <input
                            id="name"
                            placeholder="Job poster's name.."
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Job poster's email.."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            id="phone"
                            type="phone"
                            placeholder="Job poster's phone.."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default PostJob;
import React, { useState } from 'react'; // Import React and useState
import axios from 'axios'; // Import axios for HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Register = () => {
    // State variables
    const [name, setName] = useState(''); // State for name
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [confPassword, setConfPassword] = useState(''); // State for confirm password
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            // Send POST request to register user
            await axios.post('http://localhost:3000/users', {
                name,
                email,
                password,
                confPassword,
            });
            navigate('/'); // Redirect to the home page after successful registration
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.msg); // Log error response data
            }
            console.error('Registration failed:', error); // Handle error
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box" onSubmit={handleSubmit}>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} // Handle input change
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input
                                            type="email" // Changed to email type for validation
                                            className="input"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} // Handle input change
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="*****"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} // Handle input change
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="*****"
                                            value={confPassword}
                                            onChange={(e) => setConfPassword(e.target.value)} // Handle input change
                                        />
                                    </div>
                                </div>
                                <div className="failed mt-5">
                                    <button type="submit" className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
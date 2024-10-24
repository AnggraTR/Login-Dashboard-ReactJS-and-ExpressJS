import React, { useState } from 'react'; // Import useState
import axios from 'axios'; // Import axios for HTTP requests

const Login = ({ onLogin }) => { // Tambahkan onLogin sebagai prop
    // State variables
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [msg, setMsg] = useState(''); // State for message

    const handleAuth = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            // Send POST request to login user
            await axios.post('http://localhost:3000/login', {
                email,
                password,
            });
            alert('Login berhasil!'); // Alert for successful login
            onLogin(); // Panggil fungsi onLogin untuk mengubah status login
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg); // Set error message
            }
        }
    };

    return (
        <section className="hero is-fullheight is-fullwidth bg-gradient-to-b from-teal-400 to-blue-500"> {/* Gradient background */}
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box" onSubmit={handleAuth}> {/* Added onSubmit handler */}
                                {msg && <p className="has-text-danger">{msg}</p>} {/* Display error message */}
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input
                                            type="email"
                                            className="input"
                                            placeholder="Email"
                                            value={email} // Bind value to state
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
                                            value={password} // Bind value to state
                                            onChange={(e) => setPassword(e.target.value)} // Handle input change
                                        />
                                    </div>
                                </div>
                                <div className="failed mt-5">
                                    <button type="submit" className="button is-success is-fullwidth">Login</button> 
                                </div> {/* Closing div for failed */}
                            </form> {/* Closing form */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
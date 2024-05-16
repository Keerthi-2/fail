// src/LoginForm.js
import React, { useState } from 'react';
import './Login.css'; // Importing our CSS file
import Dashboard from './Dashboard';
import Admin from 'layouts/Admin/Admin';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        { username == 'ee9383' && password == '12345' && <Admin></Admin> }
        // Here, you can call an API to authenticate the user
        console.log(`Logging in with username: ${username} and password: ${password}`);
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;
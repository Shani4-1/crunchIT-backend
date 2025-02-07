import React, { useState } from 'react';
import { loginUser } from '../services/authService';

const LoginForm = () => {
    console.log("Rendering LoginForm");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const user = await loginUser({ username, password });
            // handle successful login
        } catch (error) {
            setError('Login failed');
        }
    };

   
        return (
            <form onSubmit={handleLogin}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
                {error && <div>{error}</div>}
            </form>
    );
};
export default LoginForm;
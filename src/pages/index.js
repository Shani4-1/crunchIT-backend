import React, { useState } from 'react';
import { loginUser } from '../services/authService';

function HomePage() {
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await loginUser({ username: 'user', password: 'pass' });
      console.log('User logged in:', userData);
      // Redirect or manage login state
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
      {loginError && <p>Error: {loginError}</p>}
    </div>
  );
}

export default HomePage;
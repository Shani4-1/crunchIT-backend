import React from 'react';
import LoginForm from '../components/LoginForm';
import Head from 'next/head';

const LoginPage = () => {
    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head>
            <div style={{ maxWidth: '320px', margin: 'auto', paddingTop: '50px' }}>
                <h1>Login</h1>
                <LoginForm />
            </div>
        </>
    );
};

export default LoginPage;
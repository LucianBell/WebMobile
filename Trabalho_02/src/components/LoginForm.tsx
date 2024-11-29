'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Form, Button, Container, Alert } from 'react-bootstrap';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:4000/webmob/user/login', { username, password });
            const { token } = response.data;

            localStorage.setItem('token', token);

            
            router.push('/welcome');
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid username or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container style={{ maxWidth: '400px' }}>
            <h1 className="text-center mb-4">Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="username" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading} className="w-100 mt-3 bg-red-600 border-red-600">
                    {loading ? 'Logging in...' : 'Login'}
                </Button>
            </Form>

            <p className="text-center mt-3">
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-500 underline">
                    Create one!
                </Link>
            </p>
        </Container>
    );
}

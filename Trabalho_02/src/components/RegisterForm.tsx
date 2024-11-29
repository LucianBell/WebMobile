'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Form, Button, Container, Alert } from 'react-bootstrap';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post('http://localhost:4000/webmob/user/register', { username, password });
            setSuccess(true);
            setTimeout(() => router.push('/login'), 2000); // Redirect to login page after 2 seconds
        } catch (error) {
            console.error('Registration failed:', error);
            setError('Failed to register. Try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container style={{ maxWidth: '400px' }}>
            <h1 className="text-center mb-4">Register</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Account created successfully! Redirecting to login...</Alert>}
            <Form onSubmit={handleRegister}>
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
                    {loading ? 'Registering...' : 'Register'}
                </Button>
            </Form>
        </Container>
    );
}

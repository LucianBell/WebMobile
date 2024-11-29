'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Container, Spinner, Alert, Button } from 'react-bootstrap';

export default function WelcomeClient() {
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchWelcomeMessage = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('You are not logged in');
                setLoading(false);
                return;
            }

            try {
                // Fetch the welcome message with the token
                const response = await axios.get('http://localhost:4000/webmob/welcome', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching welcome message:', error);
                setError('Failed to fetch welcome message. Please log in again.');
            } finally {
                setLoading(false);
            }
        };

        fetchWelcomeMessage();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Spinner animation="border" role="status" variant="light">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <Container>
            <h1 className="pb-3">Welcome</h1>
            {error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <p className="text-white">{message}</p>
            )}
            <Button variant="outline-light" onClick={handleLogout}>
                Logout
            </Button>
        </Container>
    );
}

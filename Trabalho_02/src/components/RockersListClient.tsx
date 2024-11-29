'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button, Container, Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Band from '@/interfaces/bands';
import Rocker from '@/interfaces/rockers';

export default function RockersListClient() {
    const [bands, setBands] = useState<Band[]>([]);
    const [rockers, setRockers] = useState<Rocker[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Fetch bands and rockers data concurrently
        const fetchBands = axios.get<Band[]>('http://localhost:4000/webmob/bands');
        const fetchRockers = axios.get<Rocker[]>('http://localhost:4000/webmob/rocker');
        
        Promise.all([fetchBands, fetchRockers])
            .then(([bandsResponse, rockersResponse]) => {
                setBands(bandsResponse.data);
                setRockers(rockersResponse.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:4000/webmob/rocker/${id}`);
            setRockers((prevRockers) => prevRockers.filter((rocker) => rocker.id !== id));
            alert('Rocker deleted successfully');
        } catch (error) {
            console.error('Error deleting rocker:', error);
            alert('Failed to delete rocker');
        }
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
        <Container className="grid grid-cols-4 gap-4">
            {rockers.map((rocker) => (
                <Card
                    key={rocker.id}
                    style={{ width: '18rem', maxHeight: '24rem', overflowY: 'auto' }}
                    className="border-white mb-4 mr-6"
                >
                    <Card.Body className="bg-zinc-900 text-white rounded">
                        <Card.Title>{rocker.name}</Card.Title>
                        <Card.Text><strong>Main Instrument:</strong> {rocker.mainInstrument}</Card.Text>
                        <Card.Text><strong>Birth Date:</strong> {new Date(rocker.birthDate).toLocaleDateString()}</Card.Text>
                        {rocker.deathDate && (
                            <Card.Text><strong>Death Date:</strong> {new Date(rocker.deathDate).toLocaleDateString()}</Card.Text>
                        )}
                        {rocker.nationality && (
                            <Card.Text><strong>Nationality:</strong> {rocker.nationality}</Card.Text>
                        )}
                        {rocker.biography && (
                            <Card.Text><strong>Biography:</strong> {rocker.biography}</Card.Text>
                        )}
                        {bands
                            .filter((band) => band.id === rocker.bandId)
                            .map((band) => (
                                <Card.Text key={band.id}>
                                    <strong>Band:</strong> <i>{band.name} - {band.genre}</i>
                                </Card.Text>
                            ))}
                        <Container className="d-flex justify-content-between mt-3">
                            <Button 
                                variant="outline-light" 
                                onClick={() => router.push(`/rockstars/update/${rocker.id}`)}
                            >
                                Update
                            </Button>
                            <Button 
                                variant="outline-danger" 
                                onClick={() => handleDelete(rocker.id)}
                            >
                                Delete
                            </Button>
                        </Container>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

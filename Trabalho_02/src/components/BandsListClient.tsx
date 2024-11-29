'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Container, Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Band from '@/interfaces/bands';
import Rocker from '@/interfaces/rockers';

interface BandsListClientProps {
    initialBands: Band[];
    initialRockers: Rocker[];
}

export default function BandsListClient({ initialBands, initialRockers }: BandsListClientProps) {
    const [bands, setBands] = useState<Band[]>(initialBands);
    const [rockers, setRockers] = useState<Rocker[]>(initialRockers);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Delete a band by ID
    const handleDelete = async (id: number) => {
        try {
            await fetch(`http://localhost:4000/webmob/bands/${id}`, { method: 'DELETE' });
            setBands((prevBands) => prevBands.filter((band) => band.id !== id));
            alert('Band deleted successfully');
        } catch (error) {
            console.error('Error deleting band:', error);
            alert('Failed to delete band');
        }
    };

    return (
        <Container className="grid grid-cols-3">
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                    <Spinner animation="border" role="status" variant="light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                bands.map((band) => (
                    <Card key={band.id} style={{ width: '22rem' }} className="border-white mb-4 mr-6">
                        <Card.Body className="text-white rounded bg-zinc-900" style={{ maxHeight: '27rem', overflowY: 'auto' }}>
                            <Card.Title>{band.name} - ID: {band.id}</Card.Title>
                            <Card.Text><strong>Genre:</strong> {band.genre}</Card.Text>
                            <Card.Text><strong>Origin:</strong> {band.origin}</Card.Text>
                            <Card.Text><strong>Year Formed:</strong> {band.yearFormed}</Card.Text>
                            <Card.Text><strong>Albums:</strong> {band.albums}</Card.Text>
                            {band.yearDisbanded && (
                                <Card.Text><strong>Year Disbanded:</strong> {band.yearDisbanded}</Card.Text>
                            )}
                            {band.description && (
                                <Card.Text><strong>Description:</strong> {band.description}</Card.Text>
                            )}
                            {band.officialWebsite && (
                                <Card.Text>
                                    <strong>Official Website:</strong> <a href={band.officialWebsite} target="blank" rel="noopener noreferrer" className="text-blue-500">{band.officialWebsite}</a>
                                </Card.Text>
                            )}
                            <Card.Text><strong>Created At:</strong> {new Date(band.created_at).toLocaleDateString()}</Card.Text>
                            <Card.Text><strong>Updated At:</strong> {new Date(band.updated_at).toLocaleDateString()}</Card.Text>

                            <Card.Text><strong>Listed Members:</strong></Card.Text>
                            {rockers
                                .filter((rocker) => rocker.bandId === band.id)
                                .map((rocker) => (
                                    <p key={rocker.id}><i>{rocker.name} - {rocker.mainInstrument}</i></p>
                                ))}

                            <div className="d-flex justify-content-between mt-3">
                                <Button 
                                    variant="outline-light" 
                                    onClick={() => router.push(`/bands/update/${band.id}`)}
                                >
                                    Update
                                </Button>
                                <Button 
                                    variant="outline-danger" 
                                    onClick={() => handleDelete(band.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            )}
        </Container>
    );
}

'use client';

import { useState, useEffect } from 'react';
import { Spinner, Button, Card, Container } from 'react-bootstrap';

export default function DoggoCard() {
    const [imageSrc, setImageSrc] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the image URL
        const fetchImage = async () => {
            try {
                const response = await fetch('https://picsum.photos/id/237/400/600');
                const imageBlob = await response.blob();
                const imageUrl = URL.createObjectURL(imageBlob);
                setImageSrc(imageUrl);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the image:', error);
                setLoading(false);
            }
        };
        fetchImage();
    }, []);

    return (
        <Container>
            <Card style={{ width: '20rem' }} className="border-white">
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center bg-black" style={{ height: '400px' }}>
                        <Spinner animation="border" role="status" variant="light">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <Card.Img variant="top" src={imageSrc} />
                )}
                <Card.Body className="bg-zinc-900 text-white rounded-b">
                    <Card.Title>The Official Darkness Rockstar Doggo 🐶🤘😈</Card.Title>
                    <Card.Text>
                        You don't wanna mess with him...
                    </Card.Text>
                    <Button
                        href="https://www.youtube.com/watch?v=6tlSx0jkuLM"
                        className="bg-red-600 text-white border-none hover:bg-red-500"
                    >
                        Black Doggo Favorite Song
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

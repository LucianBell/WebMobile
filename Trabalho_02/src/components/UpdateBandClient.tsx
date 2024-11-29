'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button, Container } from 'react-bootstrap';
import Band from '@/interfaces/bands';

interface UpdateBandClientProps {
    initialBand: Band;
}

export default function UpdateBandClient({ initialBand }: UpdateBandClientProps) {
    const [band, setBand] = useState<Band>(initialBand);
    const [saving, setSaving] = useState(false);
    const router = useRouter();

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBand((prev) => ({
            ...prev,
            [name]: name === 'yearFormed' || name === 'albums' || name === 'yearDisbanded'
                ? value === '' ? null : Number(value)
                : value,
        }));
    };

    // Handle form submission to update the band
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setSaving(true);
        try {
            await fetch(`http://localhost:4000/webmob/bands/${band.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(band),
            });
            alert('Band updated successfully');
            router.push('/bands');
        } catch (error) {
            console.error('Error updating band:', error);
            alert('Failed to update band');
        } finally {
            setSaving(false);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="bandName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={band.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="genre" className="mb-3">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                        type="text"
                        name="genre"
                        value={band.genre}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="origin" className="mb-3">
                    <Form.Label>Origin</Form.Label>
                    <Form.Control
                        type="text"
                        name="origin"
                        value={band.origin}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="yearFormed" className="mb-3">
                    <Form.Label>Year Formed</Form.Label>
                    <Form.Control
                        type="number"
                        name="yearFormed"
                        value={band.yearFormed}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="albums" className="mb-3">
                    <Form.Label>Albums</Form.Label>
                    <Form.Control
                        type="number"
                        name="albums"
                        value={band.albums}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="yearDisbanded" className="mb-3">
                    <Form.Label>Year Disbanded</Form.Label>
                    <Form.Control
                        type="number"
                        name="yearDisbanded"
                        value={band.yearDisbanded ?? ''}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={band.description ?? ''}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="officialWebsite" className="mb-3">
                    <Form.Label>Official Website</Form.Label>
                    <Form.Control
                        type="url"
                        name="officialWebsite"
                        value={band.officialWebsite ?? ''}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="bg-red-600 border-red-600" disabled={saving}>
                    {saving ? 'Saving...' : 'Update Band'}
                </Button>
            </Form>
        </Container>
    );
}

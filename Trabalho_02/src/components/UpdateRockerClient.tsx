'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Form, Button, Container, Spinner } from 'react-bootstrap';
import Band from '@/interfaces/bands';
import Rocker from '@/interfaces/rockers';

interface UpdateRockerProps {
    id: number;
}

export default function UpdateRockerClient({ id }: UpdateRockerProps) {
    const [rocker, setRocker] = useState<Rocker | null>(null);
    const [bands, setBands] = useState<Band[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchRockerAndBands = async () => {
            try {
                const rockerResponse = await axios.get<Rocker>(`http://localhost:4000/webmob/rocker/${id}`);
                const bandsResponse = await axios.get<Band[]>('http://localhost:4000/webmob/bands');
                setRocker(rockerResponse.data);
                setBands(bandsResponse.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to load rocker data');
                setLoading(false);
            }
        };
        fetchRockerAndBands();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setRocker((prev) =>
            prev
                ? {
                      ...prev,
                      [name]: name === 'bandId' ? Number(value) : value,
                  }
                : null
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!rocker) return;

        setSaving(true);
        try {
            await axios.put(`http://localhost:4000/webmob/rocker/${id}`, rocker);
            alert('Rocker updated successfully');
            router.push('/rockstars');
        } catch (error) {
            console.error('Error updating rocker:', error);
            alert('Failed to update rocker');
        } finally {
            setSaving(false);
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
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="rockerName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={rocker?.name || ''}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="mainInstrument" className="mb-3">
                <Form.Label>Main Instrument</Form.Label>
                <Form.Control
                    type="text"
                    name="mainInstrument"
                    value={rocker?.mainInstrument || ''}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="birthDate" className="mb-3">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                    type="date"
                    name="birthDate"
                    // @ts-ignore
                    value={rocker?.birthDate || ''}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="deathDate" className="mb-3">
                <Form.Label>Death Date</Form.Label>
                <Form.Control
                    type="date"
                    name="deathDate"
                    // @ts-ignore
                    value={rocker?.deathDate || ''}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="nationality" className="mb-3">
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                    type="text"
                    name="nationality"
                    value={rocker?.nationality || ''}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="biography" className="mb-3">
                <Form.Label>Biography</Form.Label>
                <Form.Control
                    as="textarea"
                    name="biography"
                    value={rocker?.biography || ''}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="bandId" className="mb-3">
                <Form.Label>Band</Form.Label>
                <Form.Select
                    name="bandId"
                    value={rocker?.bandId || ''}
                    onChange={handleChange}
                >
                    <option value="">Select Band</option>
                    {bands.map((band) => (
                        <option key={band.id} value={band.id}>
                            {band.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className=' bg-red-600 border-red-600' disabled={saving}>
                {saving ? 'Saving...' : 'Update Rocker'}
            </Button>
        </Form>
    );
}

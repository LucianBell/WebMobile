'use client'
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

// Gambiarra leve dos guri professor ñ fique bravo 🙏🙏
interface RockerInput {
    name: string;
    mainInstrument: string;
    birthDate: string;
    deathDate?: string;
    nationality?: string;
    biography?: string;
    bandId?: number;
}

interface BandInput {
    name: string;
    genre: string;
    origin: string;
    yearFormed: number;
    albums: number;
    yearDisbanded?: number;
    description?: string;
    officialWebsite?: string;
}

export default function AddRockerBandPage() {
    const [rockerData, setRockerData] = useState<RockerInput>({
        name: '',
        mainInstrument: '',
        birthDate: '',
        bandId: undefined,
    });

    const [bandData, setBandData] = useState<BandInput>({
        name: '',
        genre: '',
        origin: '',
        yearFormed: new Date().getFullYear(),
        albums: 0,
    });

    const handleRockerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRockerData((prev) => ({
            ...prev,
            [name]: name === 'bandId' ? Number(value) : value,
        }));
    };

    const handleBandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBandData((prev) => ({
            ...prev,
            [name]: name === 'yearFormed' || name === 'albums' ? Number(value) : value,
        }));
    };

    const handleRockerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Rocker Data:", rockerData);
        try {
            const response = await axios.post('http://localhost:4000/webmob/rocker', rockerData);
            console.log("Rocker Added:", response.data);
            alert('Rocker added successfully');
            setRockerData({ name: '', mainInstrument: '', birthDate: '', biography: '',bandId: undefined });
        } catch (error) {
            console.error('Error adding rocker:', error);
            alert('Failed to add rocker... Check your data and try again.');
        }
    };

    const handleBandSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Band Data:", bandData);
        try {
            const response = await axios.post('http://localhost:4000/webmob/bands', bandData);
            console.log("Band Added:", response.data);
            alert('Band added successfully');
            setBandData({ name: '', genre: '', origin: '', yearFormed: new Date().getFullYear(), albums: 0 });
        } catch (error) {
            console.error('Error adding band:', error);
            alert('Failed to add band');
        }
    };

    return (
        <main className="bg-black text-white min-h-screen h-auto px-32 py-10">
            <h1 className="pb-3">Add Rocker or Band</h1>
            
            <Container>
                {/* Rocker Form */}
                <h2>Add a New Rocker</h2>
                <Form onSubmit={handleRockerSubmit}>
                    <Form.Group controlId="rockerName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={rockerData.name} onChange={handleRockerChange} required />
                    </Form.Group>
                    <Form.Group controlId="mainInstrument" className="mb-3">
                        <Form.Label>Main Instrument</Form.Label>
                        <Form.Control type="text" name="mainInstrument" value={rockerData.mainInstrument} onChange={handleRockerChange} required />
                    </Form.Group>
                    <Form.Group controlId="birthDate" className="mb-3">
                        <Form.Label>Birth Date</Form.Label>
                        <Form.Control type="date" name="birthDate" value={rockerData.birthDate} onChange={handleRockerChange} required />
                    </Form.Group>
                    <Form.Group controlId="deathDate" className="mb-3">
                        <Form.Label>Death Date</Form.Label>
                        <Form.Control type="date" name="deathDate" value={rockerData.deathDate || ''} onChange={handleRockerChange} />
                    </Form.Group>
                    <Form.Group controlId="nationality" className="mb-3">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control type="text" name="nationality" value={rockerData.nationality} onChange={handleRockerChange} required />
                    </Form.Group>
                    <Form.Group controlId="biography" className="mb-3">
                        <Form.Label>Biography</Form.Label>
                        <Form.Control as="textarea" name="biography" value={rockerData.biography} onChange={handleRockerChange} required />
                    </Form.Group>
                    <Form.Group controlId="bandId" className="mb-3">
                        <Form.Label>Band ID (ATTENION! The band should already be registered to add a rocker...)</Form.Label>
                        <Form.Control type="number" name="bandId" value={rockerData.bandId || ''} onChange={handleRockerChange} placeholder="Enter the band's ID" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className=" mt-3 border-red-600 bg-red-600 rounded hover:scale-110 transition duration-200 uppercase">Add Rocker</Button>
                </Form>

                <hr className="my-5" />

                {/* Band Form */}
                <h2>Add a New Band</h2>
                <Form onSubmit={handleBandSubmit}>
                    <Form.Group controlId="bandName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={bandData.name} onChange={handleBandChange} required />
                    </Form.Group>
                    <Form.Group controlId="genre" className="mb-3">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" name="genre" value={bandData.genre} onChange={handleBandChange} required />
                    </Form.Group>
                    <Form.Group controlId="origin" className="mb-3">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="text" name="origin" value={bandData.origin} onChange={handleBandChange} required />
                    </Form.Group>
                    <Form.Group controlId="yearFormed" className="mb-3">
                        <Form.Label>Year Formed</Form.Label>
                        <Form.Control type="number" name="yearFormed" value={bandData.yearFormed} onChange={handleBandChange} required />
                    </Form.Group>
                    <Form.Group controlId="albums" className="mb-3">
                        <Form.Label>Albums</Form.Label>
                        <Form.Control type="number" name="albums" value={bandData.albums} onChange={handleBandChange} required />
                    </Form.Group>
                    <Form.Group controlId="yearDisbanded" className="mb-3">
                        <Form.Label>Year Disbanded</Form.Label>
                        <Form.Control type="number" name="yearDisbanded" value={bandData.yearDisbanded || ''} onChange={handleBandChange} />
                    </Form.Group>
                    <Form.Group controlId="description" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" value={bandData.description} onChange={handleBandChange} />
                    </Form.Group>
                    <Form.Group controlId="officialWebsite" className="mb-3">
                        <Form.Label>Official Website</Form.Label>
                        <Form.Control type="url" name="officialWebsite" value={bandData.officialWebsite} onChange={handleBandChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3 border-red-600 bg-red-600 rounded hover:scale-110 transition duration-200 uppercase">Add Band</Button>
                </Form>
            </Container>
        </main>
    );
}

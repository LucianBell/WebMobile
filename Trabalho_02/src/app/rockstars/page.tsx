import RockersListClient from '@/components/RockersListClient';
import { Container } from 'react-bootstrap';

export default function RockstarsPage() {
    return (
        <main className="bg-black text-white min-h-screen h-auto px-32 py-10">
            <Container>
                <h1 className="pb-3">Rockers</h1>
                <RockersListClient />
            </Container>
        </main>
    );
}

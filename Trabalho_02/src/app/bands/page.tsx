import BandsListClient from '@/components/BandsListClient';
import Band from '@/interfaces/bands';
import Rocker from '@/interfaces/rockers';

export default async function BandsPage() {
    // Fetch bands and rockers data on the server
    const bands = await fetch('http://localhost:4000/webmob/bands').then((res) => res.json() as Promise<Band[]>);
    const rockers = await fetch('http://localhost:4000/webmob/rocker').then((res) => res.json() as Promise<Rocker[]>);

    return (
        <main className="bg-black text-white min-h-screen h-auto px-32 py-10">
            <h1 className="pb-3">Bands</h1>
            {/* Pass fetched data to the client component */}
            <BandsListClient initialBands={bands} initialRockers={rockers} />
        </main>
    );
}

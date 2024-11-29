import UpdateBandClient from '@/components/UpdateBandClient';
import Band from '@/interfaces/bands';

interface UpdatePageProps {
    params: {
        id: string;
    };
}

export default async function UpdateBandPage({ params }: UpdatePageProps) {
    const id = parseInt(params.id, 10);

    // Fetch the band data on the server
    const band = await fetch(`http://localhost:4000/webmob/bands/${id}`).then((res) => res.json() as Promise<Band>);

    return (
        <main className="bg-black text-white min-h-screen h-auto px-32 py-10">
            <h1 className="pb-3">Update Band Information</h1>
            {/* Pass the band data to the client component */}
            <UpdateBandClient initialBand={band} />
        </main>
    );
}

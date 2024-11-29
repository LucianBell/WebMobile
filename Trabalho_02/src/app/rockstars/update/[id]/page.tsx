import UpdateRockerClient from '@/components/UpdateRockerClient';

interface UpdatePageProps {
    params: {
        id: string;
    };
}

export default function UpdatePage({ params }: UpdatePageProps) {
    const id = parseInt(params.id, 10); // Ensure the ID is a number

    return (
        <main className="bg-black text-white min-h-screen h-auto px-32 py-10">
            <h1 className="pb-3">Update Rocker Information</h1>
            <UpdateRockerClient id={id} />
        </main>
    );
}

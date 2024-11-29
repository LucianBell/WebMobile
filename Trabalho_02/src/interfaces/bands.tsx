interface Band {
    id: number;
    name: string;
    genre: string;
    origin: string;
    yearFormed: number;
    albums: number;
    yearDisbanded?: number;
    description?: string;
    officialWebsite?: string;
    created_at: Date;
    updated_at: Date;
}

export default Band;
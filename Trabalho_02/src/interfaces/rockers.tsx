
interface Rocker {
    id: number;
    name: string;
    mainInstrument: string;
    birthDate: Date;
    deathDate?: Date;
    nationality?: string;
    biography?: string;
    bandId: number; // This links the rocker to their band
}

export default Rocker;
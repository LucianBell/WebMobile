import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Band } from './Band';

@Entity('rocker')
export class Rocker {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    mainInstrument: string;

    @Column()
    birthDate: Date;

    @Column({ nullable: true })
    deathDate: Date;

    @Column({ nullable: true })
    nationality: string;

    @Column({ nullable: true })
    biography: string;

    @ManyToOne(() => Band, (band) => band.members)
    band: Band;
}
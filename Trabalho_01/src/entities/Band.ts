import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Rocker } from './Rocker';

@Entity('band')
export class Band {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({unique: true})
    name: string;

    @Column()
    genre: string;

    @Column()
    origin: string;

    @Column()
    yearFormed: number;

    @Column()
    albums: number;

    @Column({ nullable: true })
    yearDisbanded: number;

    @OneToMany(() => Rocker, (rocker) => rocker.band)
    members: Rocker[];

    @Column('text', { nullable: true })
    description: string;

    @Column({ nullable: true })
    officialWebsite: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
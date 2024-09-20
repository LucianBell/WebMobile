import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm"
import { Partida } from "./partida"

@Entity()
export class Campeonato {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    data: Date

    @OneToMany(() => Partida, partidas => partidas.campeonato)
    @JoinColumn()
    partidas: Partida
}
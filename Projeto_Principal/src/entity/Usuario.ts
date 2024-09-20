import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Partida } from "./partida"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: number

    @ManyToMany(() => Partida, partidas => partidas.usuarios)
    @JoinTable()
    partidas: Partida[]

}

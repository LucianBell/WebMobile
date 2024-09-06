import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { Usuario } from "./Usuario"
import { Campeonato } from "./campeonato"
import { Time } from "./time"

@Entity()
export class Partida {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: Date

    @ManyToMany(() => Usuario)
    @JoinTable() // Toda relação ManyToMany gera uma tabela intermediária
    usuarios: Usuario[]

    @Column()
    times: Time[]

    @ManyToOne(() => Campeonato, campeonato => campeonato.partidas)
    @JoinColumn()
    campeonato: Campeonato

}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Usuario } from "./Usuario"

@Entity()
export class Time {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    usuarios: Usuario[]
}

import { Provincia } from "src/provincia/entities/provincia.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Municipio {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    code:string;
    @OneToOne(()=>Provincia,provincia=>provincia.id)
    @JoinColumn()
    provincia:Provincia;
}

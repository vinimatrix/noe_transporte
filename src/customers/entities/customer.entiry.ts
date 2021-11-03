import { Municipio } from "src/municipio/entities/municipio.entity";
import { Provincia } from "src/provincia/entities/provincia.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    lastName:string;
    @Column()
    direccion:string;
    @Column()
    sector:string;
    @OneToOne(()=>Municipio,municipio=>municipio.id)
    @JoinColumn()
    municipio:Municipio;
    @OneToOne(()=>Provincia,provincia=>provincia.id)
    @JoinColumn()
    provincia:Provincia;
    @Column({unique:true})
    cedula:string;
    @Column()
    telefono:string;
    @Column({unique:true})
    email:string;
    @Column()
    password:string;
}
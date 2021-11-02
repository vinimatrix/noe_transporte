import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    @Column()
    municipio:Municipio;
    @Column()
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
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity()
export class Driver {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    lastName:string;
    @Column()
    cedula:string;
    @Column()
    telefono:string;
    @Column()
    email:string;
    @Column()
    password:string;
    @OneToMany(()=>Vehicle,vehicles=>vehicles.id)
    vehicles:Vehicle[];
    @Column('bit')
    isValidated:boolean;
    @Column()
    cedulaPic:string;
    @Column('text')
    licencePic:string



}
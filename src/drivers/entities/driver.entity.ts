import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";

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
    vehiculos:Vehicle[];
    @Column('bit')
    isValidated:boolean;
    @Column()
    cedulaPic:string;
    @Column()
    licencePic



}
import { Column, Driver, PrimaryGeneratedColumn } from "typeorm";

export class Vehicle {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    make:string;
    @Column()
    model:string;
    @Column()
    year:number;
    @Column()
    color:string;
    @Column()
    chasis:string;
    @Column()
    owner:Driver;

}
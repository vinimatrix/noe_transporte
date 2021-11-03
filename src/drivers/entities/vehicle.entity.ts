import { Column,  Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Driver } from "./driver.entity";

@Entity()
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
    @OneToOne(()=>Driver,driver=>driver.id)
    @JoinColumn()
    owner:Driver;

}
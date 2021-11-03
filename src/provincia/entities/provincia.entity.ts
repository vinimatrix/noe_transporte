import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Provincia {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:number;
    @Column()
    code:string;
}

import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Employee{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    FirstName:string;

    @Column()
    LastName:string;

    @Column()
    Gender:string;

    @Column()
    ContactNumber:number;

    @Column()
    Email:string;

    @Column()
    State:string;

    @Column()
    City:string;

    @Column()
    Designation:string;

    @Column()
    Experience:Number;

}
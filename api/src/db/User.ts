import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('User')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;
}
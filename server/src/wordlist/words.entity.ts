import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinTable, ManyToMany} from 'typeorm'; 
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/user.entity';
@Entity('word')

export class Word {
    @PrimaryGeneratedColumn({
        type:'bigint',
    })
    id:number; 
    
    @Column() 
    @IsNotEmpty()
    word:string;

    @ManyToMany ( () => User, user => user.words)
    users:User[]
}
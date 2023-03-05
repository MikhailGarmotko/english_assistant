import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm'; 
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Word } from 'src/wordlist/words.entity';

@Entity('user')

export class User {
    @PrimaryGeneratedColumn({
        type:'bigint',
    })
    id:number; 
    
    @Column() 
    @IsNotEmpty()
    username:string;

    @Column()
    @IsNotEmpty()
    email:string;

    @Column()
    @IsNotEmpty()
    @IsEmail()
    password:string;

    @ManyToMany ( () => Word, word =>word.users)
    @JoinTable({
        name:'word_user',
        joinColumn:{
            name:'user_word',
            referencedColumnName:'id',
        },
        inverseJoinColumn:{
            name:'word_id',
            referencedColumnName:'id',
        },
    })
    words:Word[];

}
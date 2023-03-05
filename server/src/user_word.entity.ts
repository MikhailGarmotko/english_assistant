import {Entity, ManyToOne, JoinColumn, PrimaryColumn} from 'typeorm'; 
import { User } from 'src/users/user.entity';
import { Word } from './wordlist/words.entity';

@Entity('user_word')
export class UserWord {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @PrimaryColumn({ name: 'word_id' })
  wordId: number;

  @ManyToOne(
    () => User,
    user => user.words,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  users: User[];

  @ManyToOne(
    () => Word,
    word => word.users,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'word_id', referencedColumnName: 'id' }])
  words: Word[];
}
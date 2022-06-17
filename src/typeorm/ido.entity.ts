import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserJoinIdo{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
      })
    id: number;

    @Column({
    nullable: false,
    default: '',
    })
    address: string;
}

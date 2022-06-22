import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserJoinIdo{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
      })
    id: number;

    @Column({
    unique: true,
    nullable: false,
    default: '',
    })
    address: string;

    @Column({
      nullable: false,
      default: 0,
    })
    ts: number;

    @Column({
      nullable: false,
      default: '',
    })
    typeStake: string
}

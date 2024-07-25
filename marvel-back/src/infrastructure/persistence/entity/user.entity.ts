import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export default class UserEntity {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 14,
    nullable: false,
    unique: true,
  })
  id!: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  name!: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  email!: string;

}

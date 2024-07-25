import { Entity, PrimaryColumn } from 'typeorm';

@Entity('user_comic')
export default class UserComicEntity {
  @PrimaryColumn({
    name: 'user_id',
    type: 'varchar',
    length: 14,
    nullable: false,
    unique: true,
  })
  userId!: string;
  @PrimaryColumn({
    name: 'comic_id',
    type: 'int',
    nullable: false,
    unique: true,
  })
  comicId!: number;
}

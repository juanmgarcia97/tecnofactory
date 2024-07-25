import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comic')
export default class ComicEntity {
  @PrimaryColumn({
    name: 'id',
    type: 'int',
    nullable: false,
    unique: true,
  })
  id!: number;

  @Column({
    name: 'title',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  title!: string;

  @Column({
    name: 'image_url',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  imageUrl!: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  description!: string;

  @Column({
    name: 'price',
    type: 'float',
    nullable: false,
  })
  price!: number;

  @Column('varchar', {
    name: 'creators',
    array: true,
    nullable: false,
  })
  creators!: string[];
}

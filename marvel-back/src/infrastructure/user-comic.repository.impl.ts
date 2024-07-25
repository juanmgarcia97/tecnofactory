import { Repository } from 'typeorm';
import UserComic from '../domain/user-comic';
import UserComicRepository from '../repository/user-comic.repository';
import { AppDataSource } from './persistence/db.config';
import UserComicEntity from './persistence/entity/user-comic.entity';
import UserComicMapper from './persistence/mapper/user-comic.mapper';
import FavoriteAlreadyExists from '../domain/exceptions/favoriteAlreadyExists';
import { injectable } from 'inversify';

@injectable()
export default class UserComicRepositoryImpl implements UserComicRepository {
  private userComicRepositoryORM: Repository<UserComic>;

  constructor() {
    this.userComicRepositoryORM = AppDataSource.getRepository(UserComicEntity);
  }

  async create(userId: string, comicId: number): Promise<UserComic> {
    const exists = await this.userComicRepositoryORM
      .createQueryBuilder('user_comic')
      .select()
      .where('user_comic.user_id = :userId', { userId })
      .andWhere('user_comic.comic_id = :comicId', { comicId })
      .getOne();
    if (exists) throw new FavoriteAlreadyExists(userId, comicId);
    const favorite = await this.userComicRepositoryORM.save(
      UserComicMapper.toEntity({ userId, comicId })
    );
    return UserComicMapper.toDomain(favorite);
  }

  async findAllByUserId(userId: string): Promise<UserComic[]> {
    const comics = await this.userComicRepositoryORM
      .createQueryBuilder('user_comic')
      .select()
      .where('user_comic.user_id = :id', { id: userId })
      .getMany();
    return UserComicMapper.toDomainList(comics);
  }

  async delete(userId: string, comicId: number): Promise<void> {
    await this.userComicRepositoryORM.remove(
      UserComicMapper.toEntity({ userId, comicId })
    );
  }
}

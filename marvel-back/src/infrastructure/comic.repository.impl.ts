import { Repository } from 'typeorm';
import { Comic } from '../domain/comic';
import ComicRepository from '../repository/comic.repository';
import ComicEntity from './persistence/entity/comic.entity';
import { AppDataSource } from './persistence/db.config';
import ComicMapper from './persistence/mapper/comic.mapper';
import ComicNotFound from '../domain/exceptions/comicNotFound';
import { injectable } from 'inversify';

@injectable()
export default class ComicRepositoryImpl implements ComicRepository {
  private comicRepositoryORM: Repository<ComicEntity>;

  constructor() {
    this.comicRepositoryORM = AppDataSource.getRepository(ComicEntity);
  }
  async create(comic: Comic): Promise<Comic> {
    if (!comic) new Error('El comic no tiene propiedades validas');
    const comicEntity = await this.comicRepositoryORM.save(
      ComicMapper.toEntity(comic)
    );
    return ComicMapper.toDomain(comicEntity);
  }
  async findById(id: number): Promise<Comic> {
    const comic = await this.comicRepositoryORM
      .createQueryBuilder('comic')
      .select()
      .where('comic.id = :id', { id })
      .getOne();
    if (!comic) throw new ComicNotFound(id);
    return ComicMapper.toDomain(comic);
  }
}

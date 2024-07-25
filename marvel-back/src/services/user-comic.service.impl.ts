import { inject, injectable } from 'inversify';
import UserComicRepository from '../repository/user-comic.repository';
import UserComicService from './user-comic.service';
import { DI } from '../domain/types';
import UserComic from '../domain/user-comic';

@injectable()
export default class UserComicServiceImpl implements UserComicService {
  @inject(DI.UserComicRepository) userComicRepository!: UserComicRepository;

  async create(userId: string, comicId: number): Promise<UserComic> {
    return this.userComicRepository.create(userId, comicId);
  }
  async findAllByUserId(id: string): Promise<UserComic[]> {
    return this.userComicRepository.findAllByUserId(id);
  }

  delete(userId: string, comicId: number): Promise<void> {
    return this.userComicRepository.delete(userId, comicId);
  }
}

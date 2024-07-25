import UserComic from '../domain/user-comic';

export default interface UserComicRepository {
  create(userId: string, comicId: number): Promise<UserComic>;
  findAllByUserId(userId: string): Promise<UserComic[]>;
  delete(userId: string, comicId: number): Promise<void>;
}
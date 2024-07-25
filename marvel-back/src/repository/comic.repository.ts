import { Comic } from '../domain/comic';

export default interface ComicRepository {
  create(comic: Comic): Promise<Comic>;
  findById(id: number): Promise<Comic>;
}
import { Comic } from '../domain/comic';

export default interface ComicService {
  create(comic: Comic): Promise<Comic>;
  findById(id: number): Promise<Comic>;
}

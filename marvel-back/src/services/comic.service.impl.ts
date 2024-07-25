import axios from 'axios';
import { Comic } from '../domain/comic';
import ComicService from './comic.service';
import { inject, injectable } from 'inversify';
import { DI } from '../domain/types';
import ComicRepository from '../repository/comic.repository';

@injectable()
export default class ComicServiceImpl implements ComicService {
  @inject(DI.ComicRepository) comicRepository!: ComicRepository;

  async create(comic: Comic): Promise<Comic> {
    return this.comicRepository.create(comic);
  }

  async findById(id: number): Promise<Comic> {
    return this.comicRepository.findById(id);
  }
}

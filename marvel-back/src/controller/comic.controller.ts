import { Request, Response as ExpressResponse } from 'express';
import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  request,
  requestParam,
  response,
} from 'inversify-express-utils';
import { DI } from '../domain/types';
import ComicService from '../services/comic.service';
import Response from './response';
import { Comic } from '../domain/comic';

@controller('/comics')
export default class ComicController extends BaseHttpController {
  constructor(@inject(DI.ComicService) private comicService: ComicService) {
    super();
  }

  @httpPost('/')
  private async create(
    @request() req: Request,
    @response() res: ExpressResponse
  ) {
    const comicObject: Comic = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      creators: req.body.creators,
    };
    const comics = await this.comicService.create(comicObject);
    Response.ok(res, comics, 'Comic creado satisfactoriamente');
  }

  @httpGet('/:id')
  private async findById(
    @requestParam('id') id: number,
    @response() res: ExpressResponse
  ) {
    const comic = await this.comicService.findById(id);
    Response.ok(res, comic, 'Comic obtenido satisfactoriamente');
  }
}

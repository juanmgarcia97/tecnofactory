import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ComicService } from '../comic.service';
import { Comic } from 'src/app/utils/types';

@Injectable({
  providedIn: 'root',
})
export class ComicsListResolver implements Resolve<Comic[]> {
  constructor(private comicService: ComicService) {}

  resolve() {
    return this.comicService.getComicsListApi(0, 50);
  }
}

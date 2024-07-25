import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/utils/types';
import { ComicService } from '../comic.service';

@Injectable({ providedIn: 'root' })
export class ComicDescriptionResolver implements Resolve<Comic> {
  constructor(private comicService: ComicService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Comic> {
    return this.comicService.findComicByIdApi(Number(route.paramMap.get('id')));
  }
}

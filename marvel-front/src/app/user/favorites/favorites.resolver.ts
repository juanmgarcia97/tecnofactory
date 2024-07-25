import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, forkJoin, map } from 'rxjs';
import { ComicService } from 'src/app/comics/comic.service';
import { Comic } from 'src/app/utils/types';
import { FavoritesService } from './favorites.service';
import { UserService } from '../user.service';

@Injectable({ providedIn: 'root' })
export class FavoritesResolver implements Resolve<Comic[]> {
  constructor(
    private comicService: ComicService,
    private favoritesService: FavoritesService,
    private userService: UserService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Comic[]> | Promise<Comic[]> | Comic[] {
    const user = this.userService.getUserLocal();
    const comics = this.comicService.getComicsListApi(0, 50);
    const favorites = this.favoritesService.findAllByUserId(user.id);
    const displayFavorites: Comic[] = [];
    return forkJoin([comics, favorites]).pipe(
      map(([comics, favorites]) => {
        const comicsMap = new Map<number, Comic>();
        comics.map((comic) => comicsMap.set(comic.id, comic));
        favorites.data.forEach((fav) => {
          const c = comicsMap.get(fav.comicId) as Comic;
          displayFavorites.push(c);
        });
        return displayFavorites;
      })
    );
  }
}

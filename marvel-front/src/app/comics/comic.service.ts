import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Comic, ComicApi, Item, MarvelResponse } from '../utils/types';
import { Observable, catchError, map, of } from 'rxjs';
import { mockedData } from '../utils/mockData';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  private apiUrl: string = environment.apiUrl as string;
  private marvelUrl: string = environment.marvelApiUrl as string;
  private marvelAuth: string = environment.marvelAuth as string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    }),
  };
  constructor(private http: HttpClient) {}

  getComicsListApi(offset: number, limit: number): Observable<Comic[]> {
    // Code to fetch de data from the API
    // return this.http
    //   .get<{ response: MarvelResponse }>(
    //     `${this.marvelUrl}?offset=${offset}&limit=${limit}&${this.marvelAuth}`
    //   )
    //   .pipe(
    //     map((data) => {
    //       return data.response.data.results.map(this.toComic);
    //     })
    //   );
    // Code with mocked data
    return of(mockedData.data.results.map(ComicService.toComic));
  }

  static toComic(comic: ComicApi): Comic {
    return {
      id: comic.id,
      title: comic.title,
      imageUrl: comic.thumbnail.path + '.' + comic.thumbnail.extension,
      description:
        comic.description !== ''
          ? comic.description
          : Array.isArray(comic.textObjects) && comic.textObjects.length > 0
          ? comic.textObjects[0].text
          : 'No description',
      creators:
        comic.creators && Array.isArray(comic.creators.items)
          ? ComicService.getCreators(comic.creators.items as Item[])
          : [],
      price: comic.prices[0].price,
    };
  }

  static getCreators(items: Item[]): string[] {
    if (!items || items.length === 0) return [];
    const creators: string[] = [];
    items.forEach((item) => {
      creators.push(`${item.name} - ${item.role}`);
    });
    return creators;
  }

  findComicByIdApi(id: number): Observable<Comic> {
    return this.http
      .get<{ response: MarvelResponse }>(
        `${this.marvelUrl}/${id}?${this.marvelAuth}`,
        this.httpOptions
      )
      .pipe(
        map((data) => {
          return data.response.data.results.map(ComicService.toComic)[0];
        })
      );
  }

  saveComic(comic: Comic) {
    return this.http.post(this.apiUrl + '/comics', comic, this.httpOptions);
  }

  findById(id: number) {
    return this.http.get(`${this.apiUrl}/comics/${id}`, this.httpOptions);
  }
}

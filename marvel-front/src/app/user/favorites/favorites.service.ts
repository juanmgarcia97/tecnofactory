import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { UserComic } from 'src/app/utils/types';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private apiUrl: string = environment.apiUrl as string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  saveFavorite(userId: string, comicId: number) {
    return this.httpClient.post(
      `${this.apiUrl}/favorites/${userId}/${comicId}`,
      null,
      this.httpOptions
    );
  }

  findAllByUserId(id: string) {
    return this.httpClient.get<{ data: UserComic[]; message: string }>(
      `${this.apiUrl}/favorites/${id}`,
      this.httpOptions
    );
  }

  deleteFavorite(userId: string, comicId: number) {
    return this.httpClient.delete(
      `${this.apiUrl}/favorites/${userId}/${comicId}`,
      this.httpOptions
    );
  }
}

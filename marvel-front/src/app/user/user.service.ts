import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../utils/types';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  create(user: User) {
    return this.httpClient.post(this.apiUrl + '/users', user, this.httpOptions);
  }

  login(id: number, email: string) {
    return this.httpClient.post(
      this.apiUrl + '/users/login',
      { id, email },
      this.httpOptions
    );
  }

  logout() {
    return of(localStorage.clear());
  }

  update(user: User) {
    return this.httpClient.put(this.apiUrl + '/users', user, this.httpOptions)
  }

  getById(id: number) {
    return this.httpClient.get(this.apiUrl + `/users/${id}`, this.httpOptions);
  }

  isLoggedIn() {
    return of(localStorage.getItem('user') !== null);
  }

  saveUserLocal(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserLocal() {
    return JSON.parse(localStorage.getItem('user') ?? '{}') as User;
  }
}

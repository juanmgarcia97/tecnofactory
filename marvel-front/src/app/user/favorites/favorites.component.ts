import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/comics/comic.service';
import { Comic, Response, User } from 'src/app/utils/types';
import { UserService } from '../user.service';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites!: Comic[];
  user!: User;
  userComics!: number[];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUserLocal();
    this.favoritesService.findAllByUserId(this.user.id).subscribe((data) => {
      data.data.forEach((item) => this.userComics.push(item.comicId));
    });
    this.route.data.subscribe((data) => {
      const comics = data['comics'] as Comic[];
      this.favorites = comics;
    });
  }
}

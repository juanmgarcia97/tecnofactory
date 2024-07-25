import { Component, Input, OnInit } from '@angular/core';
import { Comic, Response, User, UserComic } from 'src/app/utils/types';
import { ComicService } from '../comic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { NotificationService } from 'src/app/utils/notification.service';
import { FavoritesService } from 'src/app/user/favorites/favorites.service';

@Component({
  selector: 'app-comic-description',
  templateUrl: './comic-description.component.html',
  styleUrls: ['./comic-description.component.scss'],
})
export class ComicDescriptionComponent {
  comic!: Comic;
  user!: User;
  isFavorite!: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private comicService: ComicService,
    private favoritesService: FavoritesService,
    private notifier: NotificationService
  ) {
    // this.route.data.subscribe((data) => (this.comic = data['comic']));
    this.user = this.userService.getUserLocal();
    const state = router.getCurrentNavigation()?.extras.state;
    this.comic = state as Comic;
    favoritesService.findAllByUserId(this.user.id).subscribe((data) => {
      this.isFavorite = data.data.includes({
        userId: this.user.id,
        comicId: this.comic.id,
      });
    });
  }

  saveToFavorites() {
    this.comicService.saveComic(this.comic).subscribe((data) => {
      this.favoritesService
        .saveFavorite(this.user.id, this.comic.id)
        .subscribe((res) => {
          const response = res as Response;
          this.notifier.showNotification(response.message);
        });
    });
  }

  deleteFromFavorites() {
    this.favoritesService
      .deleteFavorite(this.user.id, this.comic.id)
      .subscribe((data) => {
        const res = data as Response;
        this.notifier.showNotification(res.message);
      });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../utils/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss'],
})
export class ComicCardComponent implements OnInit {
  @Input()
  comic!: Comic;
  noImage!: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.noImage = this.comic.imageUrl.includes('image_not_available');
  }

  goToComicDescription() {
    this.router.navigate([`/comics/${this.comic.id}`], {
      state: this.comic,
    });
  }
}

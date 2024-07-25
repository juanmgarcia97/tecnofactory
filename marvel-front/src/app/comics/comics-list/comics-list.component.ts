import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../utils/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit{

  comics!: Comic[];
  displayComics!: Comic[];
  limit: number = 50;
  offset: number = 0;
  @Input()
  search: string = '';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data['comics']);

      this.comics = data['comics'];
      this.displayComics = this.comics;
      this.offset += this.limit;
    })
  }
}

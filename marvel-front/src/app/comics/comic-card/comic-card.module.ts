import { NgModule } from '@angular/core';
import { ComicCardComponent } from './comic-card.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  exports: [ComicCardComponent],
  declarations: [ComicCardComponent],
})
export class ComicCardModule { }

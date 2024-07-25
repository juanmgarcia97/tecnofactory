import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicDescriptionComponent } from './comic-description/comic-description.component';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { ComicRoutingModule } from './comics-rounting.module';
import { ComicCardModule } from './comic-card/comic-card.module';


@NgModule({
  declarations: [
    ComicsListComponent,
    ComicDescriptionComponent,
  ],
  imports: [
    CommonModule,
    ComicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComicCardModule
  ]
})
export class ComicsModule { }

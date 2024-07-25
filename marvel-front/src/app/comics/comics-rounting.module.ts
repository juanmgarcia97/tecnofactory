import { RouterModule, Routes } from '@angular/router';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicDescriptionComponent } from './comic-description/comic-description.component';
import { NgModule } from '@angular/core';
import { ComicsListResolver } from './comics-list/comics-list.resolver';
import { ComicDescriptionResolver } from './comic-description/comic-description.resolver';

const routes: Routes = [
  {
    path: '',
    component: ComicsListComponent,
    resolve: {
      comics: ComicsListResolver
    }
  },
  {
    path: ':id',
    component: ComicDescriptionComponent,
    // resolve: {
    //   comic: ComicDescriptionResolver
    // }

  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicRoutingModule {}

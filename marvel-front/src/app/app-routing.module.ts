import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { ComicsListResolver } from './comics/comics-list/comics-list.resolver';
import { FavoritesResolver } from './user/favorites/favorites.resolver';

const routes: Routes = [
  {
    path: 'comics',
    loadChildren: () =>
      import('./comics/comics.module').then((m) => m.ComicsModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    resolve: {
      comics: FavoritesResolver
    }
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    redirectTo: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

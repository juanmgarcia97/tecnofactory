import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FavoritesComponent } from './favorites/favorites.component';
import { ComicCardModule } from '../comics/comic-card/comic-card.module';

const materialDeclarations = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [LoginComponent, SignUpComponent, FavoritesComponent],
  imports: [
    CommonModule,
    ComicCardModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ...materialDeclarations,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class UserModule {}

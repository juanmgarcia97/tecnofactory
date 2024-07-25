import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'marvel-front';
  isLogged!: boolean;
  userName!: string;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.userService.isLoggedIn().subscribe((data) => {
        this.isLogged = data;
        this.userName = this.isLogged ? this.userService.getUserLocal().name : '';
      });
    }, 3000);
  }
}

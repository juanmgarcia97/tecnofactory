import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../utils/notification.service';
import { UserService } from '../user.service';
import { Response } from 'src/app/utils/types';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(14)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notifier: NotificationService,
    private userService: UserService
  ) {}

  onSubmit() {
    if(!this.loginForm.valid) return;
    this.userService
      .login(
        Number(this.loginForm.controls.id.value),
        this.loginForm.controls.email.value ?? ''
      )
      .subscribe((data) => {
        const res = data as Response;
        this.notifier.showNotification(res.message);
        localStorage.setItem('user', JSON.stringify(res.data));
        this.router.navigate(['/comics']);
        this.loginForm.reset();
      });
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }
}

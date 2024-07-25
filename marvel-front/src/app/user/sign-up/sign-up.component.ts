import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/utils/notification.service';
import { Response, User } from 'src/app/utils/types';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(14)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notifier: NotificationService,
    private userService: UserService
  ) {}

  onSubmit() {
    if (!this.signUpForm.valid) return;
    const user: User = {
      id: this.signUpForm.controls.id.value as string,
      name: this.signUpForm.controls.name.value as string,
      email: this.signUpForm.controls.email.value as string,
    };
    this.userService.create(user).subscribe((data) => {
      const res = data as Response;
      this.notifier.showNotification(res.message);
      localStorage.setItem('user', JSON.stringify(res.data));
      this.router.navigate(['/comics']);
    });
  }
}

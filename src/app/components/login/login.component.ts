// Vishesh Kumar 

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = { username: '', password: '' };
  postLoginMessage: string = '';

  constructor(private userService: UserService) { };

  submitLogin = () => {
    console.log(this.loginData);
    this.userService.login(this.loginData)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.postLoginMessage = `Hi ${response.user.username}! You've logged in successfully.`;
          this.loginData = { username: '', password: '' };
        },
        error: (error) => {
          console.log(error);
          this.postLoginMessage = error;
          this.loginData = { username: '', password: '' };
        }
      });
  }
}




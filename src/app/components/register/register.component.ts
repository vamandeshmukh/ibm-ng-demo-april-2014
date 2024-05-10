import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerData: any = { username: '', password: '' };

  constructor(private userService: UserService) { }

  register = () => {

    this.userService.register(this.registerData)
      .subscribe({ next: () => { }, error: () => { } });
  };
}

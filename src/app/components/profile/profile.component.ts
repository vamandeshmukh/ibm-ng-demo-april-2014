import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, EditProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profileData: any;

  constructor(private userService: UserService) {

    this.profileData = this.userService.getProfile()
      .subscribe({
        next: (response) => {
          console.log(response);
          this.profileData = response.user;
        },
        error: (err) => { console.log(err); }
      });

    // this.userService.getUserProfile()
    // .subscribe({})

    // this.userService.getUserProfile()
    //   .subscribe({ next: () => { }, error: () => { } })
  }
}




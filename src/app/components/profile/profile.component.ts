import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, EditProfileComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profileData: any;

  constructor(private userService: UserService) {
    this.profileData = this.userService.getProfile();
    console.log(this.profileData);
  }
}


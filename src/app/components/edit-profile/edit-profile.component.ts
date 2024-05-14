import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  // use reactive form to edit profile 

  constructor(private userService: UserService) {}



}


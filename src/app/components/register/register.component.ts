import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: [{ value: '', disabled: true }],
        state: [{ value: '', disabled: true }],
        pincode: ['', Validators.required],
      })
    });
  }

  submitRegister = () => {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      this.userService.register(registerData)
        .subscribe((resp) => {
          console.log(resp);
          alert(`Hi ${resp.username}! You've successfully registered. Redirecting to login...`);
          this.registerForm.reset();
          this.router.navigate(['login']);

        });
    }
  };
}




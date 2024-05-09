import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MenubarComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title: string = 'ibm-ng-app';

  employee = {
    firstName: 'Sonu',
    salary: 10.50,
    isIndian: false
  }

}


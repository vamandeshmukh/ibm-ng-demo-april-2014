import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'life', component: LifeCycleComponent },
    { path: 'home', redirectTo: '' },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];


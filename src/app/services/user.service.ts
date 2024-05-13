import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private expressUrl: string = 'http://localhost:2000';
  private loggedInUserProfile: any;

  constructor(private http: HttpClient) { }

  register = (user: any): Observable<any> => {
    console.log(user);
    return this.http.post(`${this.expressUrl}/register`, user);
  };

  login = (user: any): Observable<any> => {
    console.log(user);
    return this.http.post(`${this.expressUrl}/login`, user);
  };

  updateProfile = (user: any): Observable<any> => {
    console.log(user);
    return this.http.put(`${this.expressUrl}/update`, user);
  };

  getProfile = (): any => {
    console.log(this.loggedInUserProfile);
    if (this.loggedInUserProfile)
      return this.loggedInUserProfile;
    else
      return null;
  };

  setProfile = (user: any): void => {
    console.log(user);
    this.loggedInUserProfile = user;
  }


  logout = () => {
    console.log('logout');
    this.loggedInUserProfile = { username: '', password: '' };
  };


}


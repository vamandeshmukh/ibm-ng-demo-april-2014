import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  expressUrl: string = 'http://localhost:2000';

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
    return this.http.post(`${this.expressUrl}/update`, user);
  };

  getProfile = (): Observable<any> => {
    console.log('getUserProfile');
    return this.http.get('is-this-the-right-approach');
    // return null;
  };


  logout = () => {
    // code 
  };


}


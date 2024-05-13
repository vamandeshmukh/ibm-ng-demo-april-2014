import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

// HttpClientModule

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // expressUrl: string = 'https://jsonplaceholder.typicode.com/users/2';
  expressUrl: string = 'http://localhost:2000';

  constructor(private http: HttpClient) { }

  register = (user: any): Observable<any> => {
    return this.http.post(`{this.expressUrl}/register`, user);
  };

  login = (user: any): Observable<any> => {
    return this.http.post(`{this.expressUrl}/login`, user);
  };

  // delete this methods afterwards 
  getUserProfile = (): Observable<any> => {
    console.log('getUserProfile');
    return this.http.get(this.expressUrl);
    // return null;
  };

  logout = () => {
    // code 
  };


}


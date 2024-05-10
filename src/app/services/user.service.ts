import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

// HttpClientModule

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://jsonplaceholder.typicode.com/users/2';

  constructor(private http: HttpClient) { }

  getUserProfile = (): any => {

    this.http.get(this.url)
      .subscribe();



    return null;

  };
}

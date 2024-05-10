import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://jsonplaceholder.typicode.com/users/2';

  constructor() { }

  getUserProfile = (): any => {

    return null;

  };
}

import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('authGuard');

  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.getLoginStatus()) {
    console.log('logged in');
    console.log(state.url);
    if (state.url === '/login' || state.url === '/register') {
      console.log(state.url);
      router.navigate(['/profile']);
      return false;
    }
    else {
      return true;
    }
  }
  else {
    console.log('not logged in');
    router.navigate(['/login']);
    return false;
  }
};















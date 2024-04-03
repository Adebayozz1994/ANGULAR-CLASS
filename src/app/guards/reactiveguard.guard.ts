import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const reactiveguardGuard: CanActivateFn = (route, state) => {
  let routers = inject(Router);
  if(localStorage['reactiveform']){
    routers
      .navigate(['reactiveform'])
      .then(() => console.log('Navigation is successful!'))
      .catch((error) => console.log(error));
  }
 
  return false;
};

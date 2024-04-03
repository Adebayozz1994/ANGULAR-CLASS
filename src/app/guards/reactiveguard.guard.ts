import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const reactiveguardGuard: CanActivateFn = (route, state) => {
  let routers = inject{}
  return true;
};

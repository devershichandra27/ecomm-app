import { CanActivateFn } from '@angular/router';

export const sellerAuthguardGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('seller')){
    return true
  }
  return false
};

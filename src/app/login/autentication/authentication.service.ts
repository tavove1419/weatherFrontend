import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  constructor() {}

  setTokenSessionStorage(token: any) {
    sessionStorage.setItem('Token', token);
  }

  isLogged(): boolean {
    return sessionStorage.getItem('Token') ? true : false;
  }
}
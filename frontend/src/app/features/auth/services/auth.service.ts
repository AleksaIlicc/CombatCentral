import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginForm, RegisterForm } from '../interfaces/auth.interfaces';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(data: RegisterForm) {
    return this.httpClient.post('http://localhost:3000/auth/register', data);
  }

  login(data: LoginForm) {
    return this.httpClient.post('http://localhost:3000/auth/login', data, {
      withCredentials: true,
    });
  }
}

import { Injectable } from '@angular/core';
import { IToken } from 'src/app/core/models/token.mode';
import { createExceptionError } from '../util/ExceptionFactory';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  //CustomException
  private readonly NotFoundToken = createExceptionError('NotFoundToken');

  saveToken(token: IToken) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): IToken {
    let token = localStorage.getItem('token');

    if (token !== null) {
      return JSON.parse(token) as IToken;
    }

    throw new this.NotFoundToken('The token was not found');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { IToken } from 'src/app/core/models/token.mode';
import {
  CurrentUser,
  RegistrationUser,
  UserCredentials,
} from 'src/app/core/types/user';
import { enviroment } from 'src/app/enviroment/enviroment';
import { JwtService } from 'src/app/shared/services/jwt.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly http: HttpClient,
    private readonly user: UserService,
    private readonly router: Router
  ) {}

  onLogin(credentials: UserCredentials): Observable<IToken> {
    return this.http
      .post<IToken>(enviroment.GET_TOKEN_URL, credentials)
      .pipe(tap((token) => this.jwt.saveToken(token)));
  }

  onRegister(newUser: RegistrationUser): Observable<void> {
    return this.http.post<void>(enviroment.POST_REGISTRATION_URL, newUser);
  }

  onLogout(): void {
    this.jwt.deleteToken(); //deleting the token
    this.user.onDeleteUser(); // deleting the currentUser
    this.router.navigate(['/']); //returning the user to the home page
  }
}

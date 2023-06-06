import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/shared/services/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInteceptor implements HttpInterceptor {
  constructor(private readonly jwt: JwtService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.jwt.getToken(); // getting the token

    const request = req.clone({
      // cloning the request a putting the header with the token
      setHeaders: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    return next.handle(request); // handling the request
  }
}

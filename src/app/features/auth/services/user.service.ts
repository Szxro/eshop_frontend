import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CurrentUser } from 'src/app/core/types/user';
import { enviroment } from 'src/app/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser = new BehaviorSubject<CurrentUser | null>(null); // to have the last user in cache
  public currentUserObservable = this.currentUser.asObservable();

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<CurrentUser> {
    return this.http
      .get<CurrentUser>(enviroment.GET_CURRENT_USER_URL)
      .pipe(tap((user) => this.currentUser.next(user)));
  }

  onDeleteUser(): void {
    this.currentUser.next(null);
  }
}

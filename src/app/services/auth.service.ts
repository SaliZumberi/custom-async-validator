import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  public checkLogin(login: string) {
    // simulate http.get()
    return of({ isLoginAvailable: login !== 'test' }).pipe(delay(400));
  }
}

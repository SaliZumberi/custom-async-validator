import { AuthService } from '../services/auth.service';
import { FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

export const loginAsyncValidator = (authService: AuthService, time: number = 500) => {
  return (input: FormControl) => {
    return timer(time).pipe(
      switchMap(() => authService.checkLogin(input.value)),
      map(res => {
        return res.isLoginAvailable ? null : { loginExist: true };
      })
    );
  };
};

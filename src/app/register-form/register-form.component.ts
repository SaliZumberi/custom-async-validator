import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { loginAsyncValidator } from '../helpers/custom-async-validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  public form: FormGroup;

  constructor(private auth: AuthService) {
    this.form = new FormGroup({
      login: new FormControl(
        null, Validators.required, loginAsyncValidator(this.auth))
    });
  }

  isLoginTaken(): boolean {
    return this.form.get('login').hasError('loginExist');
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHelperService } from '../../../../shared/services/form-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //Creating the formGroup
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly formHelper: FormHelperService
  ) {}

  public isInputValid(field: string): boolean | null {
    return this.formHelper.isInputValid(field, this.loginForm);
  }

  public getInputError(field: string): string {
    return this.formHelper.getFieldError(field, this.loginForm);
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) {
      //this is do if the form is invalid
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value);
  }
}

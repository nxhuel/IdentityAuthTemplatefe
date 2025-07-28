import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  private formBuilder = inject(FormBuilder);

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(7)],
  });

  sendFormLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}

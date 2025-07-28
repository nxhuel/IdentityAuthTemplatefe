import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RoleEnum } from '../../core/interfaces/register-dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  private formBuilder = inject(FormBuilder);

  roles = Object.values(RoleEnum);

  registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.minLength(7)],
    roleName: ['estudiante', Validators.required],
  });

  sendFormRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}

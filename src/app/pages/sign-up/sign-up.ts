import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../../core/services/register/register';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  private formBuilder = inject(FormBuilder);

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  // roles = Object.values(RoleEnum);

  registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(/^(?=.*[a-z])(?=.*[^a-zA-Z0-9])/),
      ],
    ],
  });

  sendFormRegister() {
    if (this.registerForm.invalid) return;

    const formValue = this.registerForm.value;

    const dto = {
      UserName: formValue.userName ?? '',
      Email: formValue.email ?? '',
      Password: formValue.password ?? '',
    };

    this.registerService.register(dto).subscribe({
      next: (res) => {
        console.log('Registro exitoso: ', res);
        this.router.navigate(['/sign-in']);
      },
      error: (res) => {
        console.log('Error al registrarse:', res);
      },
    });
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../core/services/login/login';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  private formBuilder = inject(FormBuilder);

  constructor(private loginService: LoginService, private router: Router) {}

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(7)]],
  });

  sendFormLogin() {
    if (!this.loginForm.valid) return;

    const formValue = this.loginForm.value;
    const dto = {
      UserName: formValue.userName ?? '',
      Password: formValue.password ?? '',
    };

    this.loginService.login(dto).subscribe({
      next: (res) => {
        console.log('Loguin exitoso: ', res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('token_expiration', res.expired);
        this.router.navigate(['/not-found']);
      },
      error: (res) => {
        console.log('Error al loguearse: ', res);
      },
    });

    // cerrar sesion
    //     logout(): void {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('token_expiration');
    //   this.router.navigate(['/login']); // redirige a login
    // }
  }
}

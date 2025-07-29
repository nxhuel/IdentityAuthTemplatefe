import { Routes } from '@angular/router';
import { SignUp } from './pages/sign-up/sign-up';
import { SignIn } from './pages/sign-in/sign-in';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUp,
  },
  {
    path: 'sign-in',
    component: SignIn,
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFound,
  },
];

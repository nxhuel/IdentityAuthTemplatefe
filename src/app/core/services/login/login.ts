import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../../interfaces/login-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiLogin: string = 'https://localhost:5166/api/Account/login';
  constructor(private http: HttpClient) {}

  public login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiLogin, loginDto);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterDto } from '../../interfaces/register-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerUrl: string = 'https://localhost:5166/api/Account/register';

  constructor(private http: HttpClient) {}

  register(registerDto: RegisterDto): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.registerUrl, registerDto);
  }
}

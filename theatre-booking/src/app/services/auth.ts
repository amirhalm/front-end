
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((res: any) => {
          if (res.token) {
            localStorage.setItem(this.tokenKey, res.token);
          }
        })
      );
  }
register(data: { name: string; email: string; password: string; password_confirmation: string }) {
  return this.http.post('http://127.0.0.1:8000/api/register', data);
}

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}

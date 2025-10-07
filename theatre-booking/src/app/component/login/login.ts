import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}
login() {
  this.auth.login({email: this.email, password: this.password}).subscribe({
    next: (res: any) => {
      localStorage.setItem('auth_token', res.token); // حفظ التوكن
      this.router.navigate(['/theatres']); // بعد تسجيل الدخول
    },
    error: err => alert(err.error.message)
  });
}
}

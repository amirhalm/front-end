import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html'
})
export class RegisterComponent {
  name=''; email=''; password=''; password_confirmation= '';

  constructor(private auth: AuthService, private router: Router){}
register() {
  this.auth.register({
    name: this.name,
    email: this.email,
    password: this.password,
    password_confirmation: this.password_confirmation
  }).subscribe({
    next: res => this.router.navigate(['/login']), // بعد التسجيل روح للوجن
    error: err => alert(err.error.message)
  });
}
}

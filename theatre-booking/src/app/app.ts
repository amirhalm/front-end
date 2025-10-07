/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('theatre-booking');
}
*/
/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Root component عندك اسمه App
import { App } from './app';

import { LoginComponent } from './component/login/login';
import { RegisterComponent } from './component/register/register';
import { TheatresComponent } from './component/theatres/theatres';
import { TheatreDetailComponent } from './component/theatre-detail/theatre-detail';
import { BookingComponent } from './component/booking/booking';

@NgModule({
  declarations: [
    App,  // Root component
    LoginComponent,
    RegisterComponent,
    TheatresComponent,
    TheatreDetailComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'theatres', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'theatres', component: TheatresComponent },
      { path: 'theatres/:id', component: TheatreDetailComponent }
    ])
  ],
  bootstrap: [App]  // هنا نستخدم App لأنه root component عندك
})
export class AppModule { }
*/
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // ✅ ضفنا RouterLink علشان الروابط تشتغل
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <h1>Theatre Booking System 🎭</h1>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a> |
      <a routerLink="/register" routerLinkActive="active">Register</a> 
     
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav a.active {
      font-weight: bold;
      color: #007bff;
    }
  `]
})
export class App { }


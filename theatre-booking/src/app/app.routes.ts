/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login';
import { RegisterComponent } from './component/register/register';
import { TheatresComponent } from './component/theatres/theatres';
import { TheatreDetailComponent } from './component/theatre-detail/theatre-detail';

export const routes: Routes = [   // ❌ مهم تعمل export
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'theatres', component: TheatresComponent },
  { path:'theatres/:id', component: TheatreDetailComponent },
  { path:'', redirectTo:'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
*//*
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatresComponent } from './component/theatres/theatres';
import { TheatreDetailsComponent } from './component/theatres-detail/theatre-details';
import { BookingComponent } from './component/booking/booking';

export const routes: Routes = [
  { path: '', redirectTo: '/theatres', pathMatch: 'full' },
  { path: 'theatres', component: TheatresComponent },
  { path: 'theatre-details/:id', component: TheatreDetailsComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: '**', redirectTo: '/theatres' } ,// fallback لأي رابط غير موجود
  {
  path: 'theatre-details/:id/booking',
  component: BookingComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login';
import { RegisterComponent } from './component/register/register';
import { TheatresComponent } from './component/theatres/theatres';
import { TheatreDetailsComponent } from './component/theatres-detail/theatre-details';
import { BookingComponent } from './component/booking/booking';
import { AuthGuard } from './guards/auth-guard';
import { ExtrasComponent } from './extras/extras';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // صفحة البداية اللوجن
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'theatres', component: TheatresComponent, canActivate: [AuthGuard] },
  { path: 'theatre-details/:id', component: TheatreDetailsComponent, canActivate: [AuthGuard] },
  { path: 'booking/:id', component: BookingComponent, canActivate: [AuthGuard] },
   { path: 'extras/:bookingId', component: ExtrasComponent },
   { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

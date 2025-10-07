import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private http: HttpClient) {}

  getBookings(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/bookings`);
  }

  bookSeat(data:any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/bookings`, data);
  }

  cancelBooking(id:number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/bookings/${id}`);
  }
}

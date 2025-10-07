import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTheatres() {
    return this.http.get(`${this.apiUrl}/theatres`);
  }

  getTheatre(id: any) {
    return this.http.get(`${this.apiUrl}/theatres/${id}`);
  }

  bookSeat(data: any) {
    return this.http.post(`${this.apiUrl}/bookings`, data);
  }
  getShowDetail(id: number) {
  return this.http.get(`${this.apiUrl}/shows/${id}`);
}

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // جلب كل المسارح
  getTheatres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/theatres`);
  }

  // جلب تفاصيل مسرح واحد + العروض
  getTheatreDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/theatres/${id}/shows`);
  }
}

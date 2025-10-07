import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShowService {
  constructor(private http: HttpClient) {}

  getShows(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/shows`);
  }

  getShow(id:number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/shows/${id}`);
  }
}


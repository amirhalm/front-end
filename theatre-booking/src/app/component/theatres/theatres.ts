
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-theatres',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './theatres.html',
})
export class TheatresComponent implements OnInit {
  theatres: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/theatres`).subscribe({
      next: (res: any) => {
        console.log('🎭 API Response:', res);
        this.theatres = res.data || []; // 👈 نستخدم data فقط
      },
      error: (err) => {
        console.error('❌ API Error:', err);
      },
    });
  }
}
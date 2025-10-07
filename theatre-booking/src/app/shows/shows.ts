import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-shows',
  templateUrl: './shows.html',
  styleUrls: ['./shows.css'],
  imports: [CommonModule, HttpClientModule]  
})
export class ShowsComponent implements OnInit {

  theatreId: number | null = null;
  shows: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // نقرأ ID المسرح من الرابط
    this.theatreId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.theatreId) {
      this.loadShows(this.theatreId);
    } else {
      this.errorMessage = 'لم يتم تحديد رقم المسرح';
      this.loading = false;
    }
  }

  loadShows(id: number) {
    this.http.get(`http://127.0.0.1:8000/api/theatres/${id}/shows`).subscribe({
      next: (response: any) => {
        if (response.status) {
          this.shows = response.data;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('خطأ أثناء تحميل العروض:', err);
        this.errorMessage = 'حدث خطأ أثناء تحميل العروض.';
        this.loading = false;
      }
    });
  }
}

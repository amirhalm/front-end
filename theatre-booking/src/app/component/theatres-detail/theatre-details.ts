
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  
@Component({
  selector: 'app-theatre-details',
  templateUrl: './theatre-details.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class TheatreDetailsComponent implements OnInit {
  theatre: any;
  shows: any[] = [];
  theatreId!: number;
  api = 'http://127.0.0.1:8000/api';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.theatreId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTheatre();
    this.loadShows();
  }

  loadTheatre() {
    this.http.get(`${this.api}/theatres/${this.theatreId}`).subscribe({
      next: (res: any) => {
        this.theatre = res.data || res;
      },
      error: (err) => console.error('خطأ أثناء تحميل بيانات المسرح:', err),
    });
  }

  loadShows() {
    this.http.get(`${this.api}/theatres/${this.theatreId}/shows`).subscribe({
      next: (res: any) => {
        this.shows = res.data || [];
      },
      error: (err) => console.error('خطأ أثناء تحميل العروض:', err),
    });
  }

  goToBooking(showId: number) {
    this.router.navigate(['/booking', showId]);
  }
}
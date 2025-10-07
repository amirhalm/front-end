
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.html',
  standalone: true,
  imports: [CommonModule],
})
export class BookingComponent implements OnInit {
  showId!: number;
  show: any;
  seats: any[] = [];
  selectedSeats: number[] = [];
  bookingSuccess = false; // للتحكم في عرض الرسالة
  bookingId!: number; // تخزين ID الحجز لو حابب تستخدمه للإضافات

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.showId = +this.route.snapshot.paramMap.get('id')!;
    this.loadShow();
    this.loadSeats();
  }

  loadShow() {
    this.http.get(`http://127.0.0.1:8000/api/shows/${this.showId}`).subscribe({
      next: (res: any) => this.show = res.data,
      error: (err) => console.error('خطأ أثناء تحميل بيانات العرض: ', err)
    });
  }

  loadSeats() {
    this.http.get(`http://127.0.0.1:8000/api/shows/${this.showId}/seats`).subscribe({
      next: (res: any) => this.seats = res.data,
      error: (err) => console.error('خطأ أثناء تحميل المقاعد: ', err)
    });
  }

  toggleSeat(seatId: number) {
    const index = this.selectedSeats.indexOf(seatId);
    if (index === -1) this.selectedSeats.push(seatId);
    else this.selectedSeats.splice(index, 1);
  }

  bookSelectedSeats() {
    if (this.selectedSeats.length === 0) return;

    this.http.post('http://127.0.0.1:8000/api/book-seat', {
      show_id: this.showId,
      seats: this.selectedSeats
    }).subscribe({
      next: (res: any) => {
        console.log('حجز المقاعد: ', res);
        this.bookingSuccess = true;
        this.bookingId = res.data[0]?.booking_id || 0; // لو الـ backend بيرجع id للحجز
      },
      error: (err) => console.error('خطأ أثناء الحجز: ', err)
    });
  }

  
  
    goToExtras() {
  // إذا صفحة Extras تحتاج id الحجز:
  this.router.navigate([`/extras/${this.bookingId}`]);

  // إذا لا تحتاج id:
  // this.router.navigate(['/extras']);
}

  }




import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-extras',
  templateUrl: './extras.html',
    imports: [CommonModule, CurrencyPipe]  
})
export class ExtrasComponent implements OnInit {
  extras: any[] = [];
  selectedExtras: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadExtras();
  }

  loadExtras() {
    this.http.get('http://127.0.0.1:8000/api/extras').subscribe({
      next: (res: any) => this.extras = res.data,
      error: err => console.error('خطأ أثناء تحميل الإضافات: ', err)
    });
  }

  toggleExtra(extraId: number) {
    const index = this.selectedExtras.indexOf(extraId);
    if (index > -1) this.selectedExtras.splice(index, 1);
    else this.selectedExtras.push(extraId);
  }

  confirmBooking() {
    // هنا تضيف POST request للإضافات
    console.log('Extras selected: ', this.selectedExtras);
    alert('تم تأكيد الحجز!');
  }
}

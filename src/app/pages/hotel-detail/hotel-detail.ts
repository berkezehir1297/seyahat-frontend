import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Location eklendi
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OTELLER } from '../../hotel.data';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-detail.html',
  styleUrl: './hotel-detail.css'
})
export class HotelDetailComponent implements OnInit {
  seciliOtel: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location // Tarayıcı geçmişi için eklendi
  ) {}

  ngOnInit(): void {
    // URL'den otel ID'sini alıyoruz
    const hotelId = this.route.snapshot.paramMap.get('id');
    
    if (hotelId) {
      // Veri dosyasından ilgili oteli buluyoruz
      this.seciliOtel = OTELLER.find(o => o.id === Number(hotelId));
    }
  }

  // Akıllı Geri Dön fonksiyonu
  goBack(): void {
    // Kullanıcıyı geldiği sayfaya geri gönderir
    this.location.back();
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Router buraya eklendi
import { OTELLER } from '../../hotel.data'; 

@Component({
  selector: 'app-trend-destinasyonlar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trend-destinasyonlar.html',
  styleUrl: './trend-destinasyonlar.css'
})
export class TrendDestinasyonlarComponent implements OnInit {
  trendHotels: any[] = [];

  // Constructor içine router'ı tanımlıyoruz
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Tüm otelleri alıp içinden sadece ilk 6 tanesini trend olarak seçiyoruz
    this.trendHotels = OTELLER.slice(0, 6); 
  }

  /**
   * Rezervasyon Yap butonuna basınca çalışır.
   * Seçilen otelin şehrini parametre olarak rota oluşturma sayfasına gönderir.
   */
  rezervasyonYap(sehir: string) {
    console.log(sehir + " için rota oluşturma sayfasına gidiliyor...");
    // navigate fonksiyonu ile queryParams (sorgu parametresi) olarak şehri gönderiyoruz
    this.router.navigate(['/new-route'], { queryParams: { city: sehir } });
  }

  // Seni login yerine kesin olarak dashboard'a götürecek fonksiyon
  anaSayfayaGit() {
    // navigateByUrl en kesin yönlendirme yöntemidir
    this.router.navigateByUrl('/dashboard').then(() => {
      console.log("Dashboard'a başarıyla yönlendirildi.");
    }).catch(err => {
      console.error("Yönlendirme hatası:", err);
      // Eğer hata olursa zorla login'e gitmemesi için dashboard'a tekrar zorluyoruz
      this.router.navigate(['dashboard']);
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { RouteService } from '../../services/route';
import { OTELLER } from '../../hotel.data'; // Otel verilerini import ettik

@Component({
  selector: 'app-new-route',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './new-route.html'
})
export class NewRouteComponent implements OnInit {
  
  yeniRota: any = {
    title: '',
    city: '',
    hotel_name: '', // Otel seçimi için alan eklendi
    start_date: '',
    description: '',
    user_id: null
  };

  mevcutOteller = OTELLER; 
  sehirler: string[] = [];

  constructor(
    private routeService: RouteService, 
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit() {
    // 1. Mevcut otellerin konumlarından benzersiz (unique) şehir listesi oluşturuyoruz
    this.sehirler = [...new Set(this.mevcutOteller.map(otel => otel.konum))];

    // 2. URL parametrelerini dinle (Trend sayfasından yönlendirme varsa)
    this.route.queryParams.subscribe(params => {
      if (params['city']) {
        this.yeniRota.city = params['city'];
        this.yeniRota.title = `${params['city']} Seyahati`;
      }
    });
  }

  /**
   * Seçilen şehre göre otelleri filtreleyen yardımcı fonksiyon.
   * HTML tarafında döngüde kullanılacak.
   */
  getFiltreliOteller() {
    if (!this.yeniRota.city) return [];
    return this.mevcutOteller.filter(otel => otel.konum === this.yeniRota.city);
  }

  kaydet() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.yeniRota.user_id = user.id;

      this.routeService.saveRoute(this.yeniRota).subscribe({
        next: (res: any) => {
          alert("Rota başarıyla oluşturuldu Berke!");
          this.router.navigate(['/dashboard']);
        },
        error: (err: any) => {
          console.error("Hata:", err);
          alert("Kayıt sırasında bir hata oluştu. Lütfen tüm alanları doldurduğunuzdan emin olun.");
        }
      });
    } else {
      alert("Lütfen önce giriş yapın!");
      this.router.navigate(['/login']);
    }
  }
}
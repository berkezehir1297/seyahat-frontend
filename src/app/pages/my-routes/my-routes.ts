import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Location eklendi
import { RouteService } from '../../services/route';
import { RouterModule } from '@angular/router';
import { OTELLER } from '../../hotel.data'; // Fotoğraflar için eklendi

@Component({
  selector: 'app-my-routes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-routes.html',
  styleUrl: './my-routes.css'
})
export class MyRoutesComponent implements OnInit {
  rotalarim: any[] = [];
  loading: boolean = true;

  constructor(
    private routeService: RouteService,
    private cdr: ChangeDetectorRef,
    private location: Location // Geri dön butonu hatasını çözen kısım
  ) {}

  ngOnInit() {
    this.rotalariGetir();
  }

  // HTML'deki hatayı (TS2339) silen fonksiyon
  goBack(): void {
    this.location.back();
  }

  // Otel ismine göre doğru fotoğrafı bulan fonksiyon
  getOtelResim(otelAdi: string): string {
    if (!otelAdi) return 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000';
    
    const otel = OTELLER.find(o => o.ad === otelAdi);
    return otel ? otel.resim : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000';
  }

  rotalariGetir() {
    const userData = localStorage.getItem('user');
    
    if (userData) {
      const user = JSON.parse(userData);
      const userId = Number(user.id);

      this.routeService.getUserRoutes(userId).subscribe({
        next: (res: any) => {
          if (Array.isArray(res)) {
            this.rotalarim = res;
          } else if (res && res.data) {
            this.rotalarim = res.data;
          }

          this.loading = false;
          this.cdr.detectChanges(); 
        },
        error: (err) => {
          console.error("API Hatası:", err);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  rotaSil(id: number) {
    if (confirm('Bu rotayı silmek istediğine emin misin Berke?')) {
      this.routeService.deleteRoute(id).subscribe({
        next: (res: any) => {
          this.rotalarim = this.rotalarim.filter(rota => rota.id !== id);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error("Silme hatası:", err);
          alert("Rota silinirken bir hata oluştu!");
        }
      });
    }
  }
}
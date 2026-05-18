import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  userName: string = 'Berke'; 

  constructor(private router: Router) {}

  ngOnInit() {
    // Kullanıcı bilgilerini kontrol et
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        // Eğer isim varsa onu al, yoksa Berke kalsın
        this.userName = user.name || 'Berke';
      } catch (e) {
        console.error("Kullanıcı verisi ayrıştırılamadı.");
      }
    }
  }

  // --- Navigasyon Fonksiyonları ---
  // Bunları HTML tarafında (click) ile de kullanabilirsin veya routerLink tercih edebilirsin

  gitYeniRotaya() {
    this.router.navigate(['/new-route']);
  }

  gitRotalarima() {
    this.router.navigate(['/my-routes']);
  }

  gitTrendDestinasyonlara() {
    this.router.navigate(['/trend-destinasyonlar']);
  }

  gitOtellere() {
    this.router.navigate(['/hotels']);
  }

  // Çıkış Yapma Fonksiyonu
  logout() {
    if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }
}
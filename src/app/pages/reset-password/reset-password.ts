import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.html',
})
export class ResetPasswordComponent implements OnInit {
  token: string = '';
  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private router: Router
  ) {}

  ngOnInit() {
    // URL'den parametreleri çekiyoruz: ?token=...&email=...
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];
    });
  }

  sifreGuncelle() {
    if (this.newPassword !== this.confirmPassword) {
      alert('Şifreler birbiriyle uyuşmuyor!');
      return;
    }

    const payload = {
      token: this.token,
      email: this.email,
      password: this.newPassword
    };

this.http.post('https://seyahat-backend.onrender.com/api/reset-password', payload).subscribe({      next: (res: any) => {
        alert('Şifreniz başarıyla güncellendi! Giriş yapabilirsiniz.');
        this.router.navigate(['/login']); // Başarılıysa giriş ekranına at
      },
      error: (err) => {
        alert('Hata: ' + (err.error.message || 'Şifre güncellenemedi.'));
      }
    });
  }
}
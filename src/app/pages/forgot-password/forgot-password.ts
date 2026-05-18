import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  
  // API adresini bir değişkene almak her zaman daha güvenlidir
  private apiUrl = 'http://127.0.0.1:8000/api/forgot-password';

  constructor(private http: HttpClient) {}

  baglantiGonder() {
    if (this.email) {
      console.log("Bağlantı isteği gönderiliyor: ", this.email);

      // HATALI YER DÜZELTİLDİ: Parantezler kaldırıldı ve apiUrl değişkeni kullanıldı
      this.http.post(this.apiUrl, { email: this.email })
        .subscribe({
          next: (res: any) => {
            console.log("Başarılı Yanıt:", res);
            
            // Laravel'den gelen mesajı kullanıcıya gösteriyoruz
            alert("Başarılı! Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.");
          },
          error: (err) => {
            console.error("Hata oluştu:", err);
            
            // Laravel'den gelen hata mesajını yakalıyoruz
            const errorMessage = err.error?.message || "Sunucu ile bağlantı kurulamadı.";
            alert("Bir hata oluştu: " + errorMessage);
          }
        });
    } else {
      alert("Lütfen geçerli bir e-posta adresi girin.");
    }
  }
}
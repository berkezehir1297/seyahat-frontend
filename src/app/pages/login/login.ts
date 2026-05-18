import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterLink, Router } from '@angular/router'; // 1. Router'ı buraya ekledik
import { Seyahat } from '../../seyahat'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  // 2. constructor içine 'private router: Router' ekledik
  constructor(private seyahatService: Seyahat, private router: Router) {}

  onLogin() {
    console.log('Giriş bilgileri:', this.loginData);
    
    this.seyahatService.girisYap(this.loginData).subscribe({
      next: (res: any) => {
        // Kullanıcı verilerini (adını vb.) sonra kullanmak için kaydedelim
        localStorage.setItem('user', JSON.stringify(res.user));
        
        alert('Giriş Başarılı! Hoş geldin.');

        // 3. KRİTİK NOKTA: 'Tamam'a basınca dashboard sayfasına gider
        this.router.navigate(['/dashboard']); 
      },
      error: (err) => {
        if (err.status === 401) {
          alert(err.error.message || 'Şifre veya e-posta hatalı!');
        } else {
          alert('Bir hata oluştu. Lütfen Laravel sunucusunun açık olduğunu kontrol edin.');
        }
      }
    });
  }
}
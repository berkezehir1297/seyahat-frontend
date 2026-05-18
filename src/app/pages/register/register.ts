import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Seyahat } from '../../seyahat'; // Seyahat servisinin yolunu kontrol et (bir üst klasörde olabilir)

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  
  // Formdaki kutucukların içindeki verileri bu nesne tutacak
  registerData = {
    name: '',
    email: '',
    password: ''
  };

  // Seyahat servisini (postacıyı) içeri alıyoruz
  constructor(private seyahatService: Seyahat) {}

  // "Hesap Oluştur" butonuna basıldığında çalışacak fonksiyon
  onSubmit() {
    console.log('Veriler gönderiliyor:', this.registerData);

    // Servis aracılığıyla Laravel'e veriyi yolluyoruz
    this.seyahatService.kayitOl(this.registerData).subscribe({
      next: (response) => {
        console.log('Laravel cevabı:', response);
        alert('Tebrikler! Kayıt başarılı bir şekilde MySQL veritabanına eklendi.');
      },
      error: (err) => {
        console.error('Bir hata oluştu:', err);
        alert('Kayıt yapılamadı! Lütfen Laravel sunucusunun ve MySQL-in açık olduğundan emin ol.');
      }
    });
  }
}
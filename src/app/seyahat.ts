import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Seyahat {
  // Laravel projemizin çalıştığı API adresi
  private apiUrl = 'https://seyahat-backend.onrender.com/api';

  constructor(private http: HttpClient) {}

  // Kayıt formundan gelen verileri Laravel'e gönderen fonksiyon
  kayitOl(kullaniciVerileri: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, kullaniciVerileri);
  }

  // Giriş yapmak için kullandığımız fonksiyon
  girisYap(girisVerileri: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, girisVerileri);
  }

  // --- YENİ EKLEDİĞİMİZ KISIM ---
  // Laravel'deki o 15 oteli getiren fonksiyon
  getHotels(): Observable<any> {
    // Laravel'de oluşturduğumuz 'api/hotels' rotasına GET isteği atar
    return this.http.get(`${this.apiUrl}/hotels`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  // Laravel backend adresin (Canlı sunucuya bağlandı)
  private apiUrl = 'https://seyahat-backend.onrender.com/api/travel-routes';

  constructor(private http: HttpClient) { }

  // 1. Yeni Rota Kaydetme
  saveRoute(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // 2. Kullanıcıya özel rotaları çekme
  getUserRoutes(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }

  // 3. Rota Silme
  deleteRoute(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
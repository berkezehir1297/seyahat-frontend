import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { HotelsComponent } from './pages/hotels/hotels';
// HATALI SATIR DÜZELTİLDİ: HotelDetail -> HotelDetailComponent
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password';
import { ResetPasswordComponent } from './pages/reset-password/reset-password';
import { TrendDestinasyonlarComponent } from './components/trend-destinasyonlar/trend-destinasyonlar';

// YENİ SAYFALARIMIZ
import { NewRouteComponent } from './pages/new-route/new-route';
import { MyRoutesComponent } from './pages/my-routes/my-routes';

export const routes: Routes = [
  // 1. Varsayılan Açılış
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // 2. Kimlik Doğrulama Yolları
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  
  // 3. Ana Uygulama Yolları
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'trend-destinasyonlar', component: TrendDestinasyonlarComponent },
  // HATALI KULLANIM DÜZELTİLDİ: component kısmı güncellendi
  { path: 'hotel-detail/:id', component: HotelDetailComponent },
  
  // 4. Rota İşlemleri Sayfaları
  { path: 'new-route', component: NewRouteComponent }, // Rota oluşturma formu
  { path: 'my-routes', component: MyRoutesComponent },   // Rotalarım listesi
  
  // 5. Hatalı Yolları Yakala (En sonda durmalı)
  { path: '**', redirectTo: 'login' }
];
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Router hatasını önlemek için
import { DashboardComponent } from './dashboard';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Standalone bileşen olduğu için imports içine ekliyoruz
      imports: [DashboardComponent],
      // Dashboard içinde Router kullandığımız için sağlayıcı eklemeliyiz
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Bileşeni başlatır
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
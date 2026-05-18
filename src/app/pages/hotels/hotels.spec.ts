import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelsComponent } from './hotels'; // Hotels yerine HotelsComponent olmalı
import { HttpClientTestingModule } from '@angular/common/http/testing'; // API istekleri için
import { RouterModule } from '@angular/router';
import { Seyahat } from '../../seyahat';

describe('HotelsComponent', () => {
  let component: HotelsComponent;
  let fixture: ComponentFixture<HotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Standalone component olduğu için imports içine ekliyoruz
      imports: [
        HotelsComponent, 
        HttpClientTestingModule, 
        RouterModule.forRoot([])
      ],
      providers: [Seyahat] // Servisimizi buraya tanıtıyoruz
    }).compileComponents();

    fixture = TestBed.createComponent(HotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Değişiklikleri algıla
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
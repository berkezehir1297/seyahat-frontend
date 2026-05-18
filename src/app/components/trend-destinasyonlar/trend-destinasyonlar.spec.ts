import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendDestinasyonlar } from './trend-destinasyonlar';

describe('TrendDestinasyonlar', () => {
  let component: TrendDestinasyonlar;
  let fixture: ComponentFixture<TrendDestinasyonlar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendDestinasyonlar],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendDestinasyonlar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OTELLER } from '../../hotel.data';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotels.html', // BURASI ÖNEMLİ: Kendi html dosyasını çağırmalı
})
export class HotelsComponent implements OnInit {
  otelListesi = OTELLER;

  constructor() {}

  ngOnInit() {}
}
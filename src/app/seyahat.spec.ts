import { TestBed } from '@angular/core/testing';

import { Seyahat } from './seyahat';

describe('Seyahat', () => {
  let service: Seyahat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seyahat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

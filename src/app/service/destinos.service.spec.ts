import { TestBed } from '@angular/core/testing';

import { DestinosService } from './destinos.service';

describe('GetDestinosService', () => {
  let service: DestinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CongregadoService } from './congregado.service';

describe('CongregadoService', () => {
  let service: CongregadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongregadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

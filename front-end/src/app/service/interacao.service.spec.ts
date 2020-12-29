import { TestBed } from '@angular/core/testing';

import { InteracaoService } from './interacao.service';

describe('InteracaoService', () => {
  let service: InteracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

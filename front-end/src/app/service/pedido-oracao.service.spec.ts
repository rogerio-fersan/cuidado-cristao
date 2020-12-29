import { TestBed } from '@angular/core/testing';

import { PedidoOracaoService } from './pedido-oracao.service';

describe('PedidoOracaoService', () => {
  let service: PedidoOracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoOracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

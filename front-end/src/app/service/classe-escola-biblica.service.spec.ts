import { TestBed } from '@angular/core/testing';

import { ClasseEscolaBiblicaService } from './classe-escola-biblica.service';

describe('ClasseEscolaBiblicaService', () => {
  let service: ClasseEscolaBiblicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasseEscolaBiblicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

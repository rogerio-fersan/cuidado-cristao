import { TestBed } from '@angular/core/testing';

import { EstagioService } from './estagio.service';

describe('EstagioService', () => {
  let service: EstagioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstagioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

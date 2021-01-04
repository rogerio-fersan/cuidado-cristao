import { TestBed } from '@angular/core/testing';

import { FirstAlertService } from './first-alert.service';

describe('FirstAlertService', () => {
  let service: FirstAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EmpServService } from './emp-serv.service';

describe('EmpServService', () => {
  let service: EmpServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

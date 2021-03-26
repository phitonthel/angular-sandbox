import { TestBed } from '@angular/core/testing';

import { InMemoryDataEmployeeService } from './in-memory-data-employee.service';

describe('InMemoryDataEmployeeService', () => {
  let service: InMemoryDataEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

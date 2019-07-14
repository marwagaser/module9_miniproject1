import { TestBed } from '@angular/core/testing';

import { CountPatientsService } from './count-patients.service';

describe('CountPatientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountPatientsService = TestBed.get(CountPatientsService);
    expect(service).toBeTruthy();
  });
});

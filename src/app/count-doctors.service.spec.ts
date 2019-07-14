import { TestBed } from '@angular/core/testing';

import { CountDoctorsService } from './count-doctors.service';

describe('CountDoctorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountDoctorsService = TestBed.get(CountDoctorsService);
    expect(service).toBeTruthy();
  });
});

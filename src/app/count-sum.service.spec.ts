import { TestBed } from '@angular/core/testing';

import { CountSumService } from './count-sum.service';

describe('CountSumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountSumService = TestBed.get(CountSumService);
    expect(service).toBeTruthy();
  });
});

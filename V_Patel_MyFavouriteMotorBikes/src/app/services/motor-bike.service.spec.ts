import { TestBed } from '@angular/core/testing';

import { MotorBikeService } from './motor-bike.service';

describe('MotorBikeService', () => {
  let service: MotorBikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorBikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

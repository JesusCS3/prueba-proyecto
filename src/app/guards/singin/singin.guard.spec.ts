import { TestBed } from '@angular/core/testing';

import { SinginGuard } from './singin.guard';

describe('SinginGuard', () => {
  let guard: SinginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SinginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { reactiveguardGuard } from './reactiveguard.guard';

describe('reactiveguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => reactiveguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

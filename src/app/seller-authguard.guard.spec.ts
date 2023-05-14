import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sellerAuthguardGuard } from './seller-authguard.guard';

describe('sellerAuthguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sellerAuthguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VendorAddressServiceService } from './vendor-address-service.service';

describe('VendorAddressServiceService', () => {
  let service: VendorAddressServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorAddressServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

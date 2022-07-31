import { TestBed } from '@angular/core/testing';

import { MydemoserviceService } from './mydemoservice.service';

describe('MydemoserviceService', () => {
  let service: MydemoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydemoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

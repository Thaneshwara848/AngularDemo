import { TestBed } from '@angular/core/testing';

import { MyinfopassService } from './myinfopass.service';

describe('MyinfopassService', () => {
  let service: MyinfopassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyinfopassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

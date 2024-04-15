import { TestBed } from '@angular/core/testing';

import { MyApicallsService } from './my-apicalls.service';

describe('MyApicallsService', () => {
  let service: MyApicallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApicallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

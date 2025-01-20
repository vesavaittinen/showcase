import { TestBed } from '@angular/core/testing';

import { FetchkinodataService } from './fetchkinodata.service';

describe('FetchkinodataService', () => {
  let service: FetchkinodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchkinodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

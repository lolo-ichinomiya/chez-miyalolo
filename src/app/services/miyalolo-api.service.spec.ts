import { TestBed, inject } from '@angular/core/testing';

import { MiyaloloApiService } from './miyalolo-api.service';

describe('MiyaloloApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiyaloloApiService]
    });
  });

  it('should be created', inject([MiyaloloApiService], (service: MiyaloloApiService) => {
    expect(service).toBeTruthy();
  }));
});

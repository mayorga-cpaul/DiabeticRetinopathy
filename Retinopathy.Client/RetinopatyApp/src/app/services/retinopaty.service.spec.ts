import { TestBed } from '@angular/core/testing';

import { RetinopatyService } from './retinopaty.service';

describe('RetinopatyService', () => {
  let service: RetinopatyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetinopatyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DemoExService } from './demo-ex.service';

describe('DemoExService', () => {
  let service: DemoExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

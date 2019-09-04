import { TestBed } from '@angular/core/testing';

import { CorreioService } from './correio.service';

describe('CorreioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorreioService = TestBed.get(CorreioService);
    expect(service).toBeTruthy();
  });
});

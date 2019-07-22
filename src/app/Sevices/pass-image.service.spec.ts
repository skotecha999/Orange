import { TestBed } from '@angular/core/testing';

import { PassImageService } from './pass-image.service';

describe('PassImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassImageService = TestBed.get(PassImageService);
    expect(service).toBeTruthy();
  });
});

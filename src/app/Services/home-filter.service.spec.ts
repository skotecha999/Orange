import { TestBed } from '@angular/core/testing';

import { HomeFilterService } from './home-filter.service';

describe('HomeFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeFilterService = TestBed.get(HomeFilterService);
    expect(service).toBeTruthy();
  });
});

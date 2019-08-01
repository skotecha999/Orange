import { TestBed } from '@angular/core/testing';

import { GetSuggestionsService } from './get-suggestions.service';

describe('GetSuggestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSuggestionsService = TestBed.get(GetSuggestionsService);
    expect(service).toBeTruthy();
  });
});

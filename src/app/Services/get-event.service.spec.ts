import { TestBed } from '@angular/core/testing';

import { GetEventService } from './get-event.service';

describe('GetEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetEventService = TestBed.get(GetEventService);
    expect(service).toBeTruthy();
  });
});

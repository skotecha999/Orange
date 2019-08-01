import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeePage } from './attendee.page';

describe('AttendeePage', () => {
  let component: AttendeePage;
  let fixture: ComponentFixture<AttendeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

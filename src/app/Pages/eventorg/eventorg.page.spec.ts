import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventorgPage } from './eventorg.page';

describe('EventorgPage', () => {
  let component: EventorgPage;
  let fixture: ComponentFixture<EventorgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventorgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventorgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

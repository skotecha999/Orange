import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventPage } from './manage-event.page';

describe('ManageEventPage', () => {
  let component: ManageEventPage;
  let fixture: ComponentFixture<ManageEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

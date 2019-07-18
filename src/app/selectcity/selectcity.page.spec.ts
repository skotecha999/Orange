import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcityPage } from './selectcity.page';

describe('SelectcityPage', () => {
  let component: SelectcityPage;
  let fixture: ComponentFixture<SelectcityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectcityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

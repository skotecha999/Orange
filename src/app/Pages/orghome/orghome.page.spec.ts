import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrghomePage } from './orghome.page';

describe('OrghomePage', () => {
  let component: OrghomePage;
  let fixture: ComponentFixture<OrghomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrghomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrghomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

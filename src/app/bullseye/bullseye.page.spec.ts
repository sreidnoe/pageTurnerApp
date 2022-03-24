import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullseyePage } from './bullseye.page';

describe('BullseyePage', () => {
  let component: BullseyePage;
  let fixture: ComponentFixture<BullseyePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullseyePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullseyePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

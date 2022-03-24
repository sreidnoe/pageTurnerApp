import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaredevilPage } from './daredevil.page';

describe('DaredevilPage', () => {
  let component: DaredevilPage;
  let fixture: ComponentFixture<DaredevilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaredevilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaredevilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

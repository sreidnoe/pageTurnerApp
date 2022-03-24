import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElektraPage } from './elektra.page';

describe('ElektraPage', () => {
  let component: ElektraPage;
  let fixture: ComponentFixture<ElektraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElektraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElektraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

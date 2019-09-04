import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina02Page } from './pagina02.page';

describe('Pagina02Page', () => {
  let component: Pagina02Page;
  let fixture: ComponentFixture<Pagina02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

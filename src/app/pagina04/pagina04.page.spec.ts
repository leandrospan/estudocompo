import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina04Page } from './pagina04.page';

describe('Pagina04Page', () => {
  let component: Pagina04Page;
  let fixture: ComponentFixture<Pagina04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina04Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

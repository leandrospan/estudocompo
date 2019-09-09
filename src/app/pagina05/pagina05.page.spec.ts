import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina05Page } from './pagina05.page';

describe('Pagina05Page', () => {
  let component: Pagina05Page;
  let fixture: ComponentFixture<Pagina05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina05Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

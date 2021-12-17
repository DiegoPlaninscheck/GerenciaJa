import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarClienteComponent } from './gerenciar-cliente.component';

describe('GerenciarClienteComponent', () => {
  let component: GerenciarClienteComponent;
  let fixture: ComponentFixture<GerenciarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

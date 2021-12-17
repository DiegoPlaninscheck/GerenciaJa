import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarPedidoComponent } from './gerenciar-pedido.component';

describe('GerenciarPedidoComponent', () => {
  let component: GerenciarPedidoComponent;
  let fixture: ComponentFixture<GerenciarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

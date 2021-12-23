import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarPedidoComponent } from './gerenciar-pedido/gerenciar-pedido.component';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from '../main/main.module';



const routes: Routes = [
  {path: 'pedidos', component: GerenciarPedidoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MainModule
  ],
  declarations: [GerenciarPedidoComponent]
})
export class PedidoModule { }

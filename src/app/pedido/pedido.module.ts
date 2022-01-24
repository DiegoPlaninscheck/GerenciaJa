import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarPedidoComponent } from './gerenciar-pedido/gerenciar-pedido.component';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from '../main/main.module';
import { FormsModule } from '@angular/forms';
import { VerPedidoComponent } from './ver-pedido/ver-pedido.component';



const routes: Routes = [
  {path: 'pedidos', component: GerenciarPedidoComponent},

  {
    path: 'pedidos',
    children: [
      {path: ':id', component: VerPedidoComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MainModule,
    FormsModule
  ],
  declarations: [GerenciarPedidoComponent, VerPedidoComponent]
})
export class PedidoModule { }

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

import { LoginModule } from '../login/login.module';

import { GerenciarClienteComponent } from '../cliente/gerenciar-cliente/gerenciar-cliente.component';
import { GerenciarPedidoComponent } from '../pedido/gerenciar-pedido/gerenciar-pedido.component'
import { GerenciarProdutosComponent } from '../produtos/gerenciar-produtos/gerenciar-produtos.component'
import { Routes, RouterModule } from '@angular/router';
import CheckLogged from '../checkLogged.canactivate';


const routes: Routes = [
  {
    path: 'main-page',
    canActivate: [CheckLogged],
    children: [
      { path: '', component: MainPageComponent },
      {
        path: 'cliente',
        children: [
          { path: '', component: GerenciarClienteComponent },
        ]
      },

      {
        path: 'produtos', 
        children: [
          {path: ':id', component: GerenciarProdutosComponent}
        ]
      },

      {
        path: 'pedidos',
        children: [
          {path: '', component: GerenciarPedidoComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    LoginModule
  ],
  declarations: [MainPageComponent],
  providers: [CheckLogged],
  exports: [MainPageComponent]
})
export class MainModule { }

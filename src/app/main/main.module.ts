import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

import { LoginModule } from '../login/login.module';

import { GerenciarClienteComponent } from '../cliente/gerenciar-cliente/gerenciar-cliente.component';
import {GerenciarPedidoComponent} from '../pedido/gerenciar-pedido/gerenciar-pedido.component'
import {GerenciarProdutosComponent} from '../produtos/gerenciar-produtos/gerenciar-produtos.component'
import { Routes, RouterModule } from '@angular/router';


const routes: Routes=[
  {path: 'cliente', component: GerenciarClienteComponent},
  {path: 'pedido', component: GerenciarPedidoComponent},
  {path: 'produtos', component: GerenciarProdutosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    LoginModule
  ],
  declarations: [MainPageComponent, GerenciarProdutosComponent, GerenciarPedidoComponent]
})
export class MainModule { }

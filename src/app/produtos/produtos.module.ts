import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from '../main/main.module';

const routes: Routes = [
  {path: 'produtos', component: GerenciarProdutosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MainModule
  ],
  declarations: [GerenciarProdutosComponent]
})
export class ProdutosModule { }

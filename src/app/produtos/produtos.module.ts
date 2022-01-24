import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from '../main/main.module';
import { FormsModule } from '@angular/forms';
import { VerProdutoComponent } from './ver-produto/ver-produto.component';

const routes: Routes = [
  {path: 'produtos', component: GerenciarProdutosComponent},

  {
    path: 'produtos',
    children: [
      {path: ':id', component: VerProdutoComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MainModule,
    FormsModule
  ],
  declarations: [GerenciarProdutosComponent, VerProdutoComponent]
})
export class ProdutosModule { }

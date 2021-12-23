import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarClienteComponent } from './gerenciar-cliente/gerenciar-cliente.component';
import { MainModule } from '../main/main.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'cliente', component: GerenciarClienteComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MainModule
  ],
  declarations: [GerenciarClienteComponent]
})
export class ClienteModule { }

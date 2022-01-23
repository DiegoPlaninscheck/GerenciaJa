import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarClienteComponent } from './gerenciar-cliente/gerenciar-cliente.component';
import { MainModule } from '../main/main.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';


const routes: Routes = [
  {path: 'cliente', component: GerenciarClienteComponent},
  {
    path: 'cliente',
    children: [
      {path: ':id', component: VerClienteComponent}
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
  declarations: [GerenciarClienteComponent, VerClienteComponent]
})
export class ClienteModule { }

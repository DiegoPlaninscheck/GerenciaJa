import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from '../app/login/login.module';
import { RouterModule } from '@angular/router';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { MainModule } from './main/main.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: TelaLoginComponent
      }
    ]),
    BrowserModule,
    LoginModule,
    RouterModule,
    MainModule,
    PedidoModule,
    ProdutosModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

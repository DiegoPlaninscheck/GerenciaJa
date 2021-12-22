import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from '../main/main-page/main-page.component';
import { MainModule } from '../main/main.module';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'main-page', component: MainPageComponent
      }
    ]),
    CommonModule,
    FormsModule,
  ],
  declarations: [TelaLoginComponent],
  exports: [TelaLoginComponent]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MainModule} from '../main/main.module'
import { MainPageComponent } from '../main/main-page/main-page.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: TelaLoginComponent
      }
    ]),
    CommonModule,
    FormsModule,
    MainModule
  ],
  declarations: [TelaLoginComponent]
})
export class LoginModule { }

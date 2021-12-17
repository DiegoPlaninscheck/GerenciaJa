import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: TelaLoginComponent
      }
    ]),
    CommonModule,
    FormsModule,
  ],
  declarations: [TelaLoginComponent]
})
export class LoginModule { }

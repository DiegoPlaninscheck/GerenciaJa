import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { MainPageComponent } from './main/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '', 
        component: MainPageComponent,
        canActivate: []
      }
    ]),
    BrowserModule,
    MainModule,
    MainPageComponent,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

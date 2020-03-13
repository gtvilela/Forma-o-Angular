import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AppRoutingModule,
    AlunosModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

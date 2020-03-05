import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretiveNgIfComponent } from './diretive-ng-if/diretive-ng-if.component';
import { DiretivaAtributoComponent } from './diretiva-atributo/diretiva-atributo.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretiveNgIfComponent,
    DiretivaAtributoComponent,
    DiretivaNgStyleComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

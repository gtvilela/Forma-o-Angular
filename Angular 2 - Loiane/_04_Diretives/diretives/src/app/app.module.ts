import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretiveNgIfComponent } from './diretive-ng-if/diretive-ng-if.component';
import { DiretivaAtributoComponent } from './diretiva-atributo/diretiva-atributo.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { ElvisComponent } from './elvis/elvis.component';
import { DiretivaNgContentComponent } from './diretiva-ng-content/diretiva-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HightlightDirective } from './shared/hightlight.directive';
import { DiretivaNgElseDirective } from './shared/diretiva-ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretiveNgIfComponent,
    DiretivaAtributoComponent,
    DiretivaNgStyleComponent,
    ElvisComponent,
    DiretivaNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HightlightDirective,
    DiretivaNgElseDirective
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

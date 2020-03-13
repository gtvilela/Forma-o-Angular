import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoService } from './curso.service';
import { CursosRoutingModule } from './cursos.routing.module';




@NgModule({
  declarations: [
    CursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  providers: [CursoService]
})
export class CursosModule { }

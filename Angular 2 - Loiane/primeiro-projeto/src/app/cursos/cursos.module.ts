import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetallheComponent } from './cursos-detallhe/cursos-detallhe.component';
import { CursosService } from './cursos.service';


@NgModule({
  declarations: [CursosComponent, CursosDetallheComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }

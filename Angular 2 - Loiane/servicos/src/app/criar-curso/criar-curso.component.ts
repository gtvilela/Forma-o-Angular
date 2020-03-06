import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = []
  cursosService: CursosService
  constructor(private _cursosService: CursosService) {
      this.cursosService = _cursosService
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}

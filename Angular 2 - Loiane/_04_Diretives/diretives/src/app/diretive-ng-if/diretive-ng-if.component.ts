import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretive-ng-if',
  templateUrl: './diretive-ng-if.component.html',
  styleUrls: ['./diretive-ng-if.component.scss']
})
export class DiretiveNgIfComponent implements OnInit {

  cursos: string[] = ["Angular", "Java", ".Net"];

  mostrarCursos:boolean = false;

  aba: string = 'home'

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos
  }
}

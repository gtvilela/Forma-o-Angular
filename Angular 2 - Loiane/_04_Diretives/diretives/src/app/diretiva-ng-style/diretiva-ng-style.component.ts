import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent implements OnInit {

  tamanhoFonte: number = 5
  ativo: boolean = false

  mudarAtivo() {
    this.ativo = !this.ativo


  }

  constructor() { }

  ngOnInit(): void {
  }

}

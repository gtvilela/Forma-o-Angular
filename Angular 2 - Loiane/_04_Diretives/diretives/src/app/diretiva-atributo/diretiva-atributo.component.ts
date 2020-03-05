import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-atributo',
  templateUrl: './diretiva-atributo.component.html',
  styleUrls: ['./diretiva-atributo.component.scss']
})
export class DiretivaAtributoComponent implements OnInit {

  meuFavorito: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onCick() {
    this.meuFavorito = !this.meuFavorito
  }

}

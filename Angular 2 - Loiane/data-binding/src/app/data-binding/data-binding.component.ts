import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {



  //Construtor 
  constructor() { }


  //Objeto
  pessoa: any = {
    nome: 'Gabriela',
    idade: 15
  }


  //Variáveis
  url:string = 'http://loiane.training';
  cursoAngular: boolean = true;

  urlImagem = 'http://lorempixel.com/400/200/nature/'

  vlrAtual: string = ''
  vlrSalvo: string = ''
  isMouseOver: boolean;
  nome: string = 'abc'
  nomeDoCurso: string = 'Angular'

 vlrInicial = 15

  //Funções
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  ngOnInit(): void {
  }


  botaoClicado() {
    alert('oi!');
  }
  onKeyUp(evento: KeyboardEvent) {
  //Pegar o 'value' do input utilizando o target
 this.vlrAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor) {
      this.vlrSalvo = valor;
  }

  //Se isMouseOver estiver com o valor 'false', vai tirar o estilo css criado para a classe highlight
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor)
  }

}

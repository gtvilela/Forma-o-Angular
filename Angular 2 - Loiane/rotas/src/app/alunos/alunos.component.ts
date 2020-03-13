import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: any[] = []
  inscricao: Subscription

  constructor(private alunosService: AlunosService) { }

  ngOnInit()  {
    this.alunos = this.alunosService.getAlunos()

  }

}

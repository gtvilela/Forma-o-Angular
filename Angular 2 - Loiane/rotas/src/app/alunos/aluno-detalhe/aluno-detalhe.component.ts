import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any
  inscricao: Subscription

  constructor(private alunosService: AlunosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit()  {
      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          let id = params['id']
          this.aluno = this.alunosService.getAluno(id)
        }
      )
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}

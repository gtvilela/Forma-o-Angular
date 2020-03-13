import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';





const alunosRoutes: Routes = [ 
  { path: 'alunos', component: AlunosComponent, children: [
          {path: 'new', component: AlunoFormComponent},
          { path: ':id', component: AlunoDetalheComponent },
          {path: ':id/edit', component: AlunoFormComponent}
  ] }
];


@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
exports: [RouterModule]
})
export class AlunosRoutingModule { }
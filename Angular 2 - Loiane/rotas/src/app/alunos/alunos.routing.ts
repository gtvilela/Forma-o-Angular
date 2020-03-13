import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';





const alunosRoutes: Routes = [ 
  { path: 'alunos', component: AlunosComponent },
  { path: 'aluno/:id', component: AlunoDetalheComponent },
  {path: 'aluno/:id/edit', component: AlunoFormComponent},
  {path: 'aluno/new', component: AlunoFormComponent}

];


@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
exports: [RouterModule]
})
export class AlunosRoutingModule { }
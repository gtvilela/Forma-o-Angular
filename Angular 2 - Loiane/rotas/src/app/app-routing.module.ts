import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';

const routes: Routes = [ 
  { path: 'cursos', 
        loadChildren: () => CursosModule},
  { path: 'alunos', 
        loadChildren: () => AlunosModule},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

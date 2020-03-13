import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  
  private alunos: any[] = [
    { id: 1, nome: 'Thiago', email: 'thiago@email.com' },
    { id: 2, nome: 'Nicole', email: 'nicole@email.com' },
    { id: 3, nome: 'Oliver', email: 'oliver@email.com' },
    { id: 4, nome: 'Luna', email: 'luna@email.com' }
  ]

  getAlunos() {
    return this.alunos
  }

  getAluno(id: number) {
    
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      
      if (aluno.id == id) {
        return aluno;
      }  
    }

    return null;
  }

 

  constructor() { }
}

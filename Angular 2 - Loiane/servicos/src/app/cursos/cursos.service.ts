import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter();

    private cursos:string[] = ['Angular 2', 'Java', 'React', 'C#']
    constructor(private logService: LogService) {
        console.log('CursosService')
    }
    getCursos() {
        this,this.logService.consoleLog('Obtendo uma lista de cursos.')
        return this.cursos;
    }

    addCurso(curso:string) {
        this.logService.consoleLog('Criando um novo curso: ' + curso)
        this.cursos.push(curso);
    }
}

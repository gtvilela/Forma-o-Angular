import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.scss']
})
export class ElvisComponent implements OnInit {


  tarefa: any = {
      desc: 'Descrição da tarefa',
      resp: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}

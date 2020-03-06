import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  livro: any = {
    titulo: 'The Handmaids Tale',
    rating: 4.5,
    numeroPaginas: 336,
    preco: 44.09,
    dataLancamento: new Date(2010, 10, 7),
    url: 'https://www.amazon.com.br/Handmaids-Tale-Margaret-Atwood/dp/0099511665/ref=asc_df_0099511665/?tag=googleshopp00-20&linkCode=df0&hvadid=379726156276&hvpos=&hvnetw=g&hvrand=8587976419402309111&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-488324829810&psc=1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

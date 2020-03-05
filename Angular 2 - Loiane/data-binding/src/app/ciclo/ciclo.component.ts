import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10

  constructor() { 
    console.log('constructor')
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('OnChanges')
  }

  ngDoCheck() {
    console.log('DoCheck')
  }

  ngOnDestroy() {
    console.log('onDestroy')
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit')
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }
  ngAfterViewInit() {
    console.log('AfterViewInit')
  }

}

import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

 
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor
}

@HostListener('mouseleave') onMouseLeave() {
  this.backgroundColor = this.defaultColor
}

@HostBinding('style.backgroundColor') get setColor() { return this.backgroundColor 
}


@Input() defaultColor: string = 'white'
@Input('highlight') highlightColor: string = 'yellow'

private backgroundColor: string

constructor() { }

ngOnInit() {
  this.backgroundColor = this.defaultColor;
}

}
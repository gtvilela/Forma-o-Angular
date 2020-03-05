

import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
      this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor
}

@HostBinding('style.backgroundColor') get setColor() { return this.backgroundColor 
}


@Input() defaultColor: string = 'white'
@Input() highlightColor: string = 'yellow'

private backgroundColor: string

  constructor() { }

}

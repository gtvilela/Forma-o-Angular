import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'yellow'
  }
  
  @HostListener('mouseleave') onMouseLeave() {
  // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white')
  this.backgroundColor = 'white'
  }
  
  // @HostBinding('style.backgroundColor') backgroundColor: string
  
  @HostBinding('style.backgroundColor') get setColor() { return this.backgroundColor 
  }
  
  private backgroundColor: string
  
  constructor() { }
  
}




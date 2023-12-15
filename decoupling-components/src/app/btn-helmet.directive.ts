import {Directive, ElementRef, Renderer2} from '@angular/core';
import {StateService} from './state.service';

@Directive({standalone: true, selector: '[appBtnHelmet]'})
export class BtnHelmetDirective {
  constructor(private el: ElementRef, private renderer: Renderer2, private stateService: StateService) {
    this.stateService.disabledState$.subscribe((isDisabled) => {
      if (isDisabled) {
        this.renderer.addClass(this.el.nativeElement, 'disabled-style');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'disabled-style');
      }
    });
  }
}

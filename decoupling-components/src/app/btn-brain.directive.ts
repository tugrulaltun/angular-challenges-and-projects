import {Directive, HostListener} from '@angular/core';
import {StateService} from './state.service';

@Directive({standalone: true, selector: '[appBtnBrain]'})
export class BtnBrainDirective {
  private isDisabled: boolean = false;

  constructor(private stateService: StateService) {
  }

  @HostListener('click')
  onClick() {
    this.isDisabled = !this.isDisabled;
    this.stateService.setDisabledState(this.isDisabled);
  }
}

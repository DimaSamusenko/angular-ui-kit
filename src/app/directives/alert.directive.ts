import {Directive, ElementRef, Inject, Input, OnInit, Optional} from '@angular/core';
import { CUiKitConfigArgs, CUiKitConfig } from '../config/c-ui-kit-config';

@Directive({
  selector: '[cAlert]'
})
export class AlertDirective implements OnInit {
  @Input() dismissible: boolean;

  closeBtn: HTMLSpanElement;

  constructor(el: ElementRef, @Inject(CUiKitConfig) @Optional() config: CUiKitConfigArgs) {
    if (this.dismissible === true) {
      this.closeBtn = this.createCloseBtn();
      this.closeBtn.addEventListener('click', this.hide);
    }
  }

  ngOnInit(): void {}

  createCloseBtn(): HTMLSpanElement {
    const span = document.createElement('span');
    span.classList.add('cui-alert-close');
    return span;
  }

  hide() {
    this.closeBtn.removeEventListener('click', this.hide);
  }

}

import { Directive, ElementRef, Input, OnInit, OnDestroy, OnChanges, SimpleChanges, Optional, Inject } from '@angular/core';
import { CUiKitConfigArgs, CUiKitConfig } from '../config/c-ui-kit-config';

export type cButtonValue = boolean | number | undefined | null;

@Directive({
  selector: '[cButton]'
})
export class ButtonDirective implements OnInit, OnChanges {
  @Input('cButton') loading: cButtonValue;
  @Input() disabled: boolean;

  el: any;
  spinner: HTMLSpanElement;

  constructor(el: ElementRef, @Inject(CUiKitConfig) @Optional() config: CUiKitConfigArgs) {
    this.el = el;
    this.spinner = this.createSpinner();
    el.nativeElement.appendChild(this.spinner);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.loading) {
      this.updateButton(changes.loading.previousValue);
    }

    if (changes.disabled) {
      this.updateDisabled();
    }
  }

  createSpinner(): HTMLSpanElement {
    const span = document.createElement('span');
    span.classList.add('cui-button-spinner');
    return span;
  }

  private updateDisabled(): void {
    this.el.disabled = this.disabled;
  }

  private updateButton(previousValue: cButtonValue): void {
    const loading: boolean = !!this.loading;
    const wasLoading: boolean = !!previousValue;

    if (!loading) {
      this.spinner.classList.toggle('show');
      return this.updateDisabled();
    }

    if (!wasLoading) {
      this.spinner.classList.toggle('show');
    }
  }
}

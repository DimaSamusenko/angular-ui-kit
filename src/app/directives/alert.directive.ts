import {Directive, ElementRef, Inject, Input, Optional} from '@angular/core';
import { CUiKitConfigArgs, CUiKitConfig } from '../config/c-ui-kit-config';

@Directive({
  selector: '[cAlert]'
})
export class AlertDirective {
  @Input() color: string;

  constructor(el: ElementRef, @Inject(CUiKitConfig) @Optional() config: CUiKitConfigArgs) { }

}

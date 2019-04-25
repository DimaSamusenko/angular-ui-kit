import {Component, OnInit, OnChanges, HostBinding, SimpleChanges, ViewChild, ViewContainerRef, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  icon: string;

  @Input() type: boolean;
  @Input() disabled: boolean;
  @Input() color: string;
  @Input() loading: boolean;

  @ViewChild('btn', {read: ViewContainerRef}) btn: ViewContainerRef;

  constructor(el: ElementRef) {
    this.icon = el.nativeElement.getAttribute('data-icon');
  }

}

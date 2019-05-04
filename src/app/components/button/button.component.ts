import {Component, OnInit, OnChanges, HostBinding, SimpleChanges, ViewChild, ViewContainerRef, Input, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  icon: string;

  @Input() type: boolean;
  @Input() disabled: boolean;
  @Input() color: string;
  @Input() loading: boolean;
  @Input() form: NgForm;
  @Input() action: () => void;

  @ViewChild('btn', {read: ViewContainerRef}) btn: ViewContainerRef;

  constructor(el: ElementRef) {
    this.icon = el.nativeElement.getAttribute('data-icon');
  }

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      this.action();
    }
  }

}

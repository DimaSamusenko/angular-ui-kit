import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { Spinner } from '@fortawesome/fontawesome-free';

@Component({
  selector: 'c-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() color: string;

  @HostBinding('class.text-default') get isDefault() { return this.color === 'default'; }
  @HostBinding('class.text-primary') get isPrimary() { return this.color === 'primary'; }
  @HostBinding('class.text-success') get isSuccess() { return this.color === 'success'; }
  @HostBinding('class.text-danger') get isError() { return this.color === 'danger'; }
  @HostBinding('class.text-warning') get isWarning() { return this.color === 'warning'; }

  constructor() { }

  ngOnInit() { }

}

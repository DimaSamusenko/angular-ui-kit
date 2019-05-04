import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  disabled = false;
  loading = false;
  title = 'angular-ui-kit';
  name = '';
  ngOnInit() {
    setInterval(() => {
      /*this.disabled = !this.disabled;
      this.loading = !this.loading;*/
    }, 2000);
  }
  submitHandler() {
    console.log('Form submit');
  }
}

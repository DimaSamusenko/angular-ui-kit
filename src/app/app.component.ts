import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = false;
  title = 'angular-ui-kit';
  ngOnInit() {
    setInterval(() => {
      this.loading = !this.loading;
    }, 2000);
  }
}

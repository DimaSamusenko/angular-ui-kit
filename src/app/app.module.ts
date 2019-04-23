import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CUiKitModule } from './cui-kit/cui-kit.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CUiKitModule.forRoot({
      foo: 'bar'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

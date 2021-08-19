import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoExModule } from 'demo-ex'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemoExModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

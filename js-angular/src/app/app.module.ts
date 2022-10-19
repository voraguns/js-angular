import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Love } from "./love";

@NgModule({
  declarations: [
    AppComponent, Love
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Love]
})
export class AppModule { }

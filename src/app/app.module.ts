import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlackCompComponent } from './black-comp/black-comp.component';
import { WhiteCompComponent } from './white-comp/white-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackCompComponent,
    WhiteCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

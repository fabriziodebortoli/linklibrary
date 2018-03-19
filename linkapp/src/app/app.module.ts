import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SampleModule } from 'linklibrary';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

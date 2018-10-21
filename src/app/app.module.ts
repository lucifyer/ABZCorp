import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { RightComponentComponent } from './right-component/right-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponentComponent,
    RightComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeUnaComponent } from './de-una/de-una.component';
import { DeAcuerdoComponent } from './de-acuerdo/de-acuerdo.component';


@NgModule({
  declarations: [
    AppComponent,
    DeUnaComponent,
    DeAcuerdoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

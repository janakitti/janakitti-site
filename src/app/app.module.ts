import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './home/landing/landing.component';
import { BodyComponent } from './home/body/body.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/body/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

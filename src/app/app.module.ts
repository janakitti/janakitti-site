import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './home/landing/landing.component';
import { BodyComponent } from './home/body/body.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/body/about/about.component';
import { ProgressBarsComponent } from './home/body/progress-bars/progress-bars.component';
import { SkillsComponent } from './home/body/skills/skills.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ResumeComponent } from './home/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent,
    ProgressBarsComponent,
    SkillsComponent,
    FeaturedComponent,
    FooterComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

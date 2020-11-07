import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { TimelineComponent } from './home/resume/timeline/timeline.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedCardComponent } from './home/body/progress-bars/featured-card/featured-card.component';
import { LinksComponent } from './home/body/about/links/links.component';
import { ProjectCardsComponent } from './home/project-cards/project-cards.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CarouselComponent } from './carousel/carousel.component';
import { HushHushComponent } from './portfolio/hush-hush/hush-hush.component';
import { LandingFrameComponent } from './shared/landing-frame/landing-frame.component';

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
    ResumeComponent,
    TimelineComponent,
    FeaturedCardComponent,
    LinksComponent,
    ProjectCardsComponent,
    CarouselComponent,
    HushHushComponent,
    LandingFrameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

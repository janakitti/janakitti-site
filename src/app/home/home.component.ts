import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { ResponsiveService } from '../core/responsive.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { PhotosComponent } from './photos/photos.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MusicComponent } from './music/music.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SectionComponent,
    DashboardComponent,
    SkillsComponent,
    ExperienceComponent,
    ArtworkComponent,
    PhotosComponent,
    RecipesComponent,
    MusicComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public responsive: ResponsiveService) {}
}

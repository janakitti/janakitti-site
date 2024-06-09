import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { ResponsiveService } from '../core/responsive.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, SectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public responsive: ResponsiveService) {}
}

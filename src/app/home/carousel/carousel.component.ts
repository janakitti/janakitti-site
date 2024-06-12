import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ResponsiveService } from '../../core/responsive.service';
import { CarouselItem } from '../../shared/interfaces';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Input() data: CarouselItem[] = [];
  @Input() height = '8em';
  @Input() defaultVisible = 3;

  responsiveOptions = [
    {
      breakpoint: '960px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '599.98px',
      numVisible: 2,
      numScroll: 1,
    },
  ];

  constructor(public responsive: ResponsiveService) {}
}

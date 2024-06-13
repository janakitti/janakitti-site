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
  defaultNumVisible = 3;
  responsiveOptions = [
    {
      breakpoint: '960px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '599.98px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  @Input() data: CarouselItem[] = [];
  @Input() set numVisible(value: number[]) {
    this.defaultNumVisible = value[0];
    this.responsiveOptions[0].numVisible = value[1];
    this.responsiveOptions[1].numVisible = value[2];
  }
  @Input() aspectRatio: number = 1;
  @Input() showName: boolean = false;

  constructor(public responsive: ResponsiveService) {}
}

import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ResponsiveService } from '../../core/responsive.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  items = [
    // {
    //   id: 'toybox',
    //   name: 'Toybox Icons',
    //   imgUrl: '/experience/spacewalk.png',
    // },
    {
      id: 'spacewalk',
      name: 'Spacewalk',
      imgUrl: '/experience/spacewalk.png',
    },
    {
      id: 'google23',
      name: 'YouTube',
      imgUrl: '/experience/youtube.png',
    },
    {
      id: 'sidefx',
      name: 'SideFx',
      imgUrl: '/experience/sidefx.png',
    },
    {
      id: 'google22',
      name: 'Google',
      imgUrl: '/experience/google.png',
    },
    {
      id: 'spatial',
      name: 'Spatial',
      imgUrl: '/experience/spatial.png',
    },
    {
      id: 'virtrolio',
      name: 'Virtrolio',
      imgUrl: '/experience/virtrolio.png',
    },
    {
      id: 'darwinai',
      name: 'Darwin AI',
      imgUrl: '/experience/darwinai.png',
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
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

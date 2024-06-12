import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselItem } from '../../shared/interfaces';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  items: CarouselItem[] = [
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
}

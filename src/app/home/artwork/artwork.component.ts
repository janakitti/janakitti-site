import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselItem } from '../../shared/interfaces';

@Component({
  selector: 'app-artwork',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.css',
})
export class ArtworkComponent {
  items: CarouselItem[] = [
    {
      id: 'googledoodle',
      name: 'Google Doodle',
      imgUrl: '/artwork/googledoodle.png',
    },
    {
      id: 'hidden',
      name: 'Hidden',
      imgUrl: '/artwork/hidden.png',
    },
    {
      id: 'ghostcrew',
      name: 'Ghost Crew',
      imgUrl: '/artwork/ghostcrew.png',
    },
    {
      id: 'queensgambit',
      name: "The Queen's Gambit",
      imgUrl: '/artwork/queens_gambit.png',
    },
  ];
}

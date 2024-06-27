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
      url: 'https://www.instagram.com/artwork.jr',
    },
    {
      id: 'hidden',
      name: 'Hidden',
      imgUrl: '/artwork/hidden.png',
      url: 'https://www.instagram.com/artwork.jr',
    },
    {
      id: 'ghostcrew',
      name: 'Ghost Crew',
      imgUrl: '/artwork/ghostcrew.png',
      url: 'https://www.instagram.com/artwork.jr',
    },
    {
      id: 'queensgambit',
      name: "The Queen's Gambit",
      imgUrl: '/artwork/queens_gambit.png',
      url: 'https://www.instagram.com/artwork.jr',
    },
    {
      id: 'google_icons',
      name: 'Google Icons',
      imgUrl: '/artwork/google_icons.jpg',
      url: 'https://www.instagram.com/artwork.jr',
    },
    {
      id: 'strings_by_arch',
      name: 'Strings by Arch',
      imgUrl: '/artwork/strings_by_arch.jpg',
      url: 'https://www.instagram.com/artwork.jr',
    },
    {
      id: 'humble',
      name: 'Humble',
      imgUrl: '/artwork/humble.png',
      url: 'https://www.instagram.com/artwork.jr',
    },
    {
      id: 'ram',
      name: 'Ram',
      imgUrl: '/artwork/ram.png',
      url: 'https://www.instagram.com/artwork.jr',
    },
  ];
}

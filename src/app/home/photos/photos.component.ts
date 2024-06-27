import { Component } from '@angular/core';
import { CarouselItem } from '../../shared/interfaces';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent {
  items: CarouselItem[] = [
    {
      id: 'cliffhanger',
      name: '',
      imgUrl: '/photos/cliffhanger.jpg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'doi_inthanon_flowers',
      name: '',
      imgUrl: '/photos/doi_inthanon_flowers.jpg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'snorkel',
      name: '',
      imgUrl: '/photos/snorkel.jpeg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'leaves',
      name: '',
      imgUrl: '/photos/leaves.jpg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'mori_point',
      name: '',
      imgUrl: '/photos/mori_point.jpg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'temple_dog',
      name: '',
      imgUrl: '/photos/temple_dog.jpg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'rice_fields',
      name: '',
      imgUrl: '/photos/rice_fields.jpg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'temple',
      name: '',
      imgUrl: '/photos/temple.jpg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'yaowarat',
      name: '',
      imgUrl: '/photos/yaowarat.jpeg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'palm',
      name: '',
      imgUrl: '/photos/palm.jpg',
      url: 'https://www.instagram.com/janakitti',
    },
    {
      id: 'motorcycle',
      name: '',
      imgUrl: '/photos/motorcycle.jpg',
      url: 'https://www.instagram.com/janakitti',
    },
  ];
}

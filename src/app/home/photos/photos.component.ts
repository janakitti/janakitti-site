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
    },
    {
      id: 'doi_inthanon_flowers',
      name: '',
      imgUrl: '/photos/doi_inthanon_flowers.jpg',
    },
    {
      id: 'snorkel',
      name: '',
      imgUrl: '/photos/snorkel.jpeg',
    },
    {
      id: 'leaves',
      name: '',
      imgUrl: '/photos/leaves.jpg',
    },
    {
      id: 'mori_point',
      name: '',
      imgUrl: '/photos/mori_point.jpg',
    },
    {
      id: 'temple_dog',
      name: '',
      imgUrl: '/photos/temple_dog.jpg',
    },
    {
      id: 'rice_fields',
      name: '',
      imgUrl: '/photos/rice_fields.jpg',
    },
    {
      id: 'temple',
      name: '',
      imgUrl: '/photos/temple.jpg',
    },
    {
      id: 'yaowarat',
      name: '',
      imgUrl: '/photos/yaowarat.jpeg',
    },
    {
      id: 'palm',
      name: '',
      imgUrl: '/photos/palm.jpg',
    },
    {
      id: 'motorcycle',
      name: '',
      imgUrl: '/photos/motorcycle.jpg',
    },
  ];
}

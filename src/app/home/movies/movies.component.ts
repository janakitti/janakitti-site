import { Component } from '@angular/core';
import { CarouselItem } from '../../shared/interfaces';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  items: CarouselItem[] = [
    {
      id: 'good_time',
      name: 'Good Time',
      imgUrl: '/movies/good_time.png',
      url: '',
    },
    {
      id: 'uncut_gems',
      name: 'Uncut Gems',
      imgUrl: '/movies/uncut_gems.png',
      url: '',
    },
    {
      id: 'the_social_network',
      name: 'The Social Network',
      imgUrl: '/movies/the_social_network.png',
      url: '',
    },
    {
      id: 'interstellar',
      name: 'Interstellar',
      imgUrl: '/movies/interstellar.png',
      url: '',
    },
    {
      id: 'arrival',
      name: 'Arrival',
      imgUrl: '/movies/arrival.png',
      url: '',
    },
    {
      id: 'ex_machina',
      name: 'Ex Machina',
      imgUrl: '/movies/ex_machina.png',
      url: '',
    },
    {
      id: 'the_lighthouse',
      name: 'The Lighthouse',
      imgUrl: '/movies/the_lighthouse.png',
      url: '',
    },
    {
      id: 'the_killing_of_a_sacred_deer',
      name: 'The Killing of a Sacred Deer',
      imgUrl: '/movies/the_killing_of_a_sacred_deer.png',
      url: '',
    },
    {
      id: 'prisoners',
      name: 'Prisoners',
      imgUrl: '/movies/prisoners.png',
      url: '',
    },
    {
      id: 'enemy',
      name: 'Enemy',
      imgUrl: '/movies/enemy.png',
      url: '',
    },
    {
      id: 'whiplash',
      name: 'Whiplash',
      imgUrl: '/movies/whiplash.png',
      url: '',
    },
    {
      id: 'coherence',
      name: 'Coherence',
      imgUrl: '/movies/coherence.png',
      url: '',
    },
    {
      id: 'the_invitation',
      name: 'The Invitation',
      imgUrl: '/movies/the_invitation.png',
      url: '',
    },
    {
      id: 'parasite',
      name: 'Parasite',
      imgUrl: '/movies/parasite.png',
      url: '',
    },
    {
      id: '1917',
      name: '1917',
      imgUrl: '/movies/1917.png',
      url: '',
    },
    {
      id: 'the_revenant',
      name: 'The Revenant',
      imgUrl: '/movies/the_revenant.png',
      url: '',
    },
    {
      id: 'big_hero_6',
      name: 'Big Hero 6',
      imgUrl: '/movies/big_hero_6.png',
      url: '',
    },
    {
      id: 'hereditary',
      name: 'Hereditary',
      imgUrl: '/movies/hereditary.png',
      url: '',
    },
    {
      id: 'sinister',
      name: 'Sinister',
      imgUrl: '/movies/sinister.png',
      url: '',
    },
    {
      id: 'the_blair_witch_project',
      name: 'The Blair Witch Project',
      imgUrl: '/movies/the_blair_witch_project.png',
      url: '',
    },
    {
      id: 'goodnight_mommy',
      name: 'Goodnight Mommy',
      imgUrl: '/movies/goodnight_mommy.png',
      url: '',
    },
  ];
}

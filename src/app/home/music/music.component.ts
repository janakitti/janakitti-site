import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselItem } from '../../shared/interfaces';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css',
})
export class MusicComponent {
  items: CarouselItem[] = [
    {
      id: 'genre_gradient',
      name: 'Genre Gradient',
      imgUrl: '/music/genre_gradient.jpg',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'conversation_pit',
      name: 'The Conversation Pit',
      imgUrl: '/music/theconversationpit.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'mmatsr',
      name: 'Skating Rink',
      imgUrl: '/music/mmatsr.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'altostratus',
      name: 'altostratus',
      imgUrl: '/music/altostratus.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'short_circuit',
      name: 'Short Circuit',
      imgUrl: '/music/short_circuit.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'nectarine',
      name: 'Nectarine',
      imgUrl: '/music/nectarine.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'outrun',
      name: 'Outrun',
      imgUrl: '/music/outrun.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'jawbreaker',
      name: 'Jawbreaker',
      imgUrl: '/music/jawbreaker.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'light_mode',
      name: 'Light Mpde',
      imgUrl: '/music/light_mode.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'dark_mode',
      name: 'Dark Mode',
      imgUrl: '/music/dark_mode.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'contrails',
      name: 'Contrails',
      imgUrl: '/music/contrails.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'cruise_control',
      name: 'Cruise Control',
      imgUrl: '/music/cruise_control.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
  ];
}

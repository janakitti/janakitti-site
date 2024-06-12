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
      name: 'genre gradient',
      imgUrl: '/music/genre_gradient.jpg',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'conversation_pit',
      name: 'the conversation pit',
      imgUrl: '/music/theconversationpit.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'mmatsr',
      name: 'meet me @ the skating rink',
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
      name: 'short circuit',
      imgUrl: '/music/short_circuit.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'nectarine',
      name: 'nectarine',
      imgUrl: '/music/nectarine.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'outrun',
      name: 'outrun',
      imgUrl: '/music/outrun.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'jawbreaker',
      name: 'jawbreaker',
      imgUrl: '/music/jawbreaker.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'light_mode',
      name: 'light mode',
      imgUrl: '/music/light_mode.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'dark_mode',
      name: 'dark mode',
      imgUrl: '/music/dark_mode.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'contrails',
      name: 'contrails',
      imgUrl: '/music/contrails.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
    {
      id: 'cruise_control',
      name: 'cruise control',
      imgUrl: '/music/cruise_control.png',
      url: 'https://open.spotify.com/playlist/75Mi069Ice5GqfIJm9wpeh?si=fcdcda0e255d4695',
    },
  ];
}

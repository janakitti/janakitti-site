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

  albums: CarouselItem[] = [
    {
      id: 'pixel_bath',
      name: '',
      imgUrl: '/music/albums/pixel_bath.jpg',
      url: '',
    },
    {
      id: '1975_pink',
      name: '',
      imgUrl: '/music/albums/1975_pink.jpg',
      url: '',
    },
    {
      id: 'noacf',
      name: '',
      imgUrl: '/music/albums/noacf.jpg',
      url: '',
    },
    {
      id: 'currents',
      name: '',
      imgUrl: '/music/albums/currents.png',
      url: '',
    },
    {
      id: 'the_slow_rush',
      name: '',
      imgUrl: '/music/albums/the_slow_rush.jpg',
      url: '',
    },
    {
      id: 'wcpgw',
      name: '',
      imgUrl: '/music/albums/wcpgw.png',
      url: '',
    },
    {
      id: 'am',
      name: '',
      imgUrl: '/music/albums/am.jpg',
      url: '',
    },
    {
      id: 'continuum',
      name: '',
      imgUrl: '/music/albums/continuum.jpg',
      url: '',
    },
    {
      id: 'saturation_2',
      name: '',
      imgUrl: '/music/albums/saturation_2.png',
      url: '',
    },
    {
      id: 'big_fish_theory',
      name: '',
      imgUrl: '/music/albums/big_fish_theory.jpeg',
      url: '',
    },
    {
      id: 'dreamland',
      name: '',
      imgUrl: '/music/albums/dreamland.jpg',
      url: '',
    },
    {
      id: 'heartbeat_city',
      name: '',
      imgUrl: '/music/albums/heartbeat_city.jpg',
      url: '',
    },
    {
      id: 'stone_roses',
      name: '',
      imgUrl: '/music/albums/stone_roses.jpg',
      url: '',
    },
    {
      id: 'no_pressure_lp',
      name: '',
      imgUrl: '/music/albums/no_pressure_lp.jpg',
      url: '',
    },
    {
      id: 'enema_of_the_state',
      name: '',
      imgUrl: '/music/albums/enema_of_the_state.jpeg',
      url: '',
    },
    {
      id: 'hscp2',
      name: '',
      imgUrl: '/music/albums/hscp2.jpg',
      url: '',
    },
    {
      id: 'swimming',
      name: '',
      imgUrl: '/music/albums/swimming.png',
      url: '',
    },
    {
      id: 'imywiw18',
      name: '',
      imgUrl: '/music/albums/imywiw18.jpg',
      url: '',
    },
    {
      id: 'suga',
      name: '',
      imgUrl: '/music/albums/suga.jpg',
      url: '',
    },
    {
      id: 'welcome_home',
      name: '',
      imgUrl: '/music/albums/welcome_home.jpg',
      url: '',
    },
  ];
}

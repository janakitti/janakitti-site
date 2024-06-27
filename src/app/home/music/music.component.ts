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
      url: 'https://open.spotify.com/playlist/0LgwDvNHcNndm7vbCD8yiE?si=b31fa59f8b8c41fe',
    },
    {
      id: 'mmatsr',
      name: '@ the roller skate rink',
      imgUrl: '/music/mmatsr.png',
      url: 'https://open.spotify.com/playlist/72A4BfroakW0ijhsgOkxrM?si=33c90a5f06464801',
    },
    {
      id: 'altostratus',
      name: 'altostratus',
      imgUrl: '/music/altostratus.png',
      url: 'https://open.spotify.com/playlist/2mvWzNzvNJr6H1he23jJNk?si=bd7c49362a1d433a',
    },
    {
      id: 'short_circuit',
      name: 'short circuit',
      imgUrl: '/music/short_circuit.png',
      url: 'https://open.spotify.com/playlist/53BB54bvCheJ5hiu4d9CeK?si=82467eb546ac4f56',
    },
    {
      id: 'nectarine',
      name: 'nectarine',
      imgUrl: '/music/nectarine.png',
      url: 'https://open.spotify.com/playlist/71VIjEPkSmV8xPDqfnUvlx?si=6ba8cab6cf394f47',
    },
    {
      id: 'outrun',
      name: 'outrun',
      imgUrl: '/music/outrun.png',
      url: 'https://open.spotify.com/playlist/2r8AEluo6MWg3yKLORK0oW?si=dee440231e164848',
    },
    {
      id: 'jawbreaker',
      name: 'JAWBREAKER',
      imgUrl: '/music/jawbreaker.png',
      url: 'https://open.spotify.com/playlist/3CNXcCBpnoKPTxqM5k193Z?si=db3aa9c191e44267',
    },
    {
      id: 'light_mode',
      name: 'light mode',
      imgUrl: '/music/light_mode.png',
      url: 'https://open.spotify.com/playlist/3o2urEOfhi0DmE1AAUgOYG?si=1d8153f365094ef5',
    },
    {
      id: 'dark_mode',
      name: 'dark mode',
      imgUrl: '/music/dark_mode.png',
      url: 'https://open.spotify.com/playlist/0zy5ysRDfUOznqPdjNG2l2?si=95dfe0923c3d442c',
    },
    {
      id: 'contrails',
      name: 'contrails',
      imgUrl: '/music/contrails.png',
      url: 'https://open.spotify.com/playlist/7t1eD4ucVG3e9VTTsM9e09?si=46abb4d0a6d241c0',
    },
    {
      id: 'cruise_control',
      name: 'cruise control',
      imgUrl: '/music/cruise_control.png',
      url: 'https://open.spotify.com/playlist/3Qs0zfK6jAAZS5oEQm9xXy?si=8aaf3f55cdb04daa',
    },
    {
      id: 'bullet_train',
      name: 'bullet train',
      imgUrl: '/music/bullet_train.png',
      url: 'https://open.spotify.com/playlist/6ApjnQV6RkVVgKAVUVKiq2?si=354dfcc40a5f4819',
    },
    {
      id: 'nautilus',
      name: 'nautilus',
      imgUrl: '/music/nautilus.png',
      url: 'https://open.spotify.com/playlist/4CpvsoC0J0K2eEoJTEVhBR?si=c13fc049ec7641a2',
    },
    {
      id: 'whey_protein_isolate',
      name: 'whey protein isolate',
      imgUrl: '/music/whey_protein_isolate.png',
      url: 'https://open.spotify.com/playlist/3hXQ7RyJA3693sRGFxPFO7?si=b4d1a2baec5049c2',
    },
  ];

  albums: CarouselItem[] = [
    {
      id: 'pixel_bath',
      name: '',
      imgUrl: '/music/albums/pixel_bath.jpg',
      url: 'https://open.spotify.com/album/121Hqnfr9tMBdL0LJuIstL?si=fdEvRIQOQNier0Pj4z_t-g',
    },
    {
      id: '1975_pink',
      name: '',
      imgUrl: '/music/albums/1975_pink.jpg',
      url: 'https://open.spotify.com/album/1JFmNyVPdBF1ECvv4fhpW4?si=BkYFANcFRjezyjnPzRMUaA',
    },
    {
      id: 'noacf',
      name: '',
      imgUrl: '/music/albums/noacf.jpg',
      url: 'https://open.spotify.com/album/0o5xjCboti8vXhdoUG9LYi?si=0fWUs3UsQiu9viVhCVfyJA',
    },
    {
      id: 'currents',
      name: '',
      imgUrl: '/music/albums/currents.png',
      url: 'https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv?si=97f893aa80cf4fdc',
    },
    {
      id: 'the_slow_rush',
      name: '',
      imgUrl: '/music/albums/the_slow_rush.jpg',
      url: 'https://open.spotify.com/album/31qVWUdRrlb8thMvts0yYL?si=fb7558799de2437d',
    },
    {
      id: 'wcpgw',
      name: '',
      imgUrl: '/music/albums/wcpgw.png',
      url: 'https://open.spotify.com/album/1BubKJqf6Uc4fNae5kLJJ7?si=1c11adb012ee41d4',
    },
    {
      id: 'am',
      name: '',
      imgUrl: '/music/albums/am.jpg',
      url: 'https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu?si=413f609b49f64601',
    },
    {
      id: 'continuum',
      name: '',
      imgUrl: '/music/albums/continuum.jpg',
      url: 'https://open.spotify.com/album/1Xsprdt1q9rOzTic7b9zYM?si=55b8c34d6c80473b',
    },
    {
      id: 'saturation_2',
      name: '',
      imgUrl: '/music/albums/saturation_2.png',
      url: 'https://open.spotify.com/album/0XnqQzdSFAml08XZoRt1St?si=220f6192132f4950',
    },
    {
      id: 'big_fish_theory',
      name: '',
      imgUrl: '/music/albums/big_fish_theory.jpeg',
      url: 'https://open.spotify.com/album/5h3WJG0aZjNOrayFu3MhCS?si=af6145b90b564057',
    },
    {
      id: 'dreamland',
      name: '',
      imgUrl: '/music/albums/dreamland.jpg',
      url: 'https://open.spotify.com/album/5bfpRtBW7RNRdsm3tRyl3R?si=7eb50d15f7284bc0',
    },
    {
      id: 'heartbeat_city',
      name: '',
      imgUrl: '/music/albums/heartbeat_city.jpg',
      url: 'https://open.spotify.com/track/5QuQFz3QK3ILCpBgGHGss8?si=33159a2dbcd042e8',
    },
    {
      id: 'stone_roses',
      name: '',
      imgUrl: '/music/albums/stone_roses.jpg',
      url: 'https://open.spotify.com/album/0um9FI6BLBldL5POP4D4Cw?si=S-k2WhF-SCiHI1n_MqzpzA',
    },
    {
      id: 'no_pressure_lp',
      name: '',
      imgUrl: '/music/albums/no_pressure_lp.jpg',
      url: 'https://open.spotify.com/album/4IFXisyTbSmbEwzlGX3XzR?si=a6bcb6775d884b34',
    },
    {
      id: 'enema_of_the_state',
      name: '',
      imgUrl: '/music/albums/enema_of_the_state.jpeg',
      url: 'https://open.spotify.com/album/652N05EcNH1a4bIlUixQE2?si=3e914af999684ada',
    },
    {
      id: 'hscp2',
      name: '',
      imgUrl: '/music/albums/hscp2.jpg',
      url: 'https://open.spotify.com/album/1vQYbqslni0jVfvaVK2lvx?si=94b8bd85017b42d0',
    },
    {
      id: 'swimming',
      name: '',
      imgUrl: '/music/albums/swimming.png',
      url: 'https://open.spotify.com/album/5wtE5aLX5r7jOosmPhJhhk?si=a5f40c246f6a44f6',
    },
    {
      id: 'imywiw18',
      name: '',
      imgUrl: '/music/albums/imywiw18.jpg',
      url: 'https://open.spotify.com/album/71cQY3dUThCY6vVKaUIXqR?si=dbc2a6fee6ac43f6',
    },
    {
      id: 'suga',
      name: '',
      imgUrl: '/music/albums/suga.jpg',
      url: 'https://open.spotify.com/album/5E5QGOClKXPXlVwOW9cWUz?si=2962adf507fc4ddb',
    },
    {
      id: 'welcome_home',
      name: '',
      imgUrl: '/music/albums/welcome_home.jpg',
      url: 'https://open.spotify.com/album/2NDlOOZNBvq6B26feV4gJc?si=8D7l7Yr-R9K_-dwuP1BJ3w',
    },
  ];
}

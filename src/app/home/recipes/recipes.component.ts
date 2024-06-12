import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselItem } from '../../shared/interfaces';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  items: CarouselItem[] = [
    {
      id: 'pad_thai',
      name: 'Pad Thai',
      imgUrl: '/recipes/pad_thai.png',
    },
    {
      id: 'nam_tok',
      name: 'Nam Tok',
      imgUrl: '/recipes/nam_tok.png',
    },
    {
      id: 'maple_foam_latte',
      name: 'Maple Foam Lattee',
      imgUrl: '/recipes/maple_foam_latte.png',
    },
  ];
}

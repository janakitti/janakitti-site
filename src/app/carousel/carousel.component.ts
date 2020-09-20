import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, useAnimation} from '@angular/animations';
import {
  fadeIn,
  fadeOut,
} from './carousel.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn)]),
      transition('* => void', [useAnimation(fadeOut)]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  public carousels = [
    {title: 'virtrolio', slides: ['../../assets/images/virtrolio.svg', '../../assets/images/tangible.svg'], currentSlide: 0},
    {title: 'FedoraField', slides: ['r', 't'], currentSlide: 0}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick(carousel: number) {
    const previous = this.carousels[carousel].currentSlide - 1;
    this.carousels[carousel].currentSlide = previous < 0 ? this.carousels[carousel].slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.carousels[carousel].currentSlide);
    console.log('0: ', this.carousels[0].currentSlide);
    console.log('1: ', this.carousels[1].currentSlide);
  }

  onNextClick(carousel: number) {
    const next = this.carousels[carousel].currentSlide + 1;
    this.carousels[carousel].currentSlide = next === this.carousels[carousel].slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.carousels[carousel].currentSlide);
    console.log('0: ', this.carousels[0].currentSlide);
    console.log('1: ', this.carousels[1].currentSlide);
  }

}

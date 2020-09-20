import {Component, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn, fadeOut} from './carousel.animations';
import {DataService} from '../core/data.service';

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

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
  }

  onPreviousClick(carousel: number) {
    const previous = this.dataService.carousels[carousel].currentSlide - 1;
    this.dataService.carousels[carousel].currentSlide = previous < 0 ? this.dataService.carousels[carousel].slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.dataService.carousels[carousel].currentSlide);
    console.log('0: ', this.dataService.carousels[0].currentSlide);
    console.log('1: ', this.dataService.carousels[1].currentSlide);
  }

  onNextClick(carousel: number) {
    const next = this.dataService.carousels[carousel].currentSlide + 1;
    this.dataService.carousels[carousel].currentSlide = next === this.dataService.carousels[carousel].slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.dataService.carousels[carousel].currentSlide);
    console.log('0: ', this.dataService.carousels[0].currentSlide);
    console.log('1: ', this.dataService.carousels[1].currentSlide);
  }

}

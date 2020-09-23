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
    this.preloadCarouselSlides();
  }

  preloadCarouselSlides() {
    for (const carousels of this.dataService.carousels) {
      for (const slide of carousels.slides) {
        new Image().src = slide;
      }
    }
  }

  onPreviousClick(carousel: number) {
    const previous = this.dataService.carousels[carousel].currentSlide - 1;
    this.dataService.carousels[carousel].currentSlide = previous < 0 ? this.dataService.carousels[carousel].slides.length - 1 : previous;
  }

  onNextClick(carousel: number) {
    const next = this.dataService.carousels[carousel].currentSlide + 1;
    this.dataService.carousels[carousel].currentSlide = next === this.dataService.carousels[carousel].slides.length ? 0 : next;
  }

  selectCarousel(index: number) {
    for (let i = 0; i < this.dataService.carousels.length; i++) {
      if (i === index) { this.dataService.carousels[i].width = 1000; }
      else { this.dataService.carousels[i].width = 100; }
      console.log(this.dataService.carousels[i].width);
    }
  }

}

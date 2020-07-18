import {Component, OnInit} from '@angular/core';
import {FeaturedItem} from '../../shared/interfaces';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featured: FeaturedItem = {
    title: 'Virtrolio',
    description: 'An Angular & Firebase based web service allowing students practicing physical distancing due to COVID-19 to sign each others yearbooks virtually.',
    image: '../../assets/images/featured-img.png',
    color1: '#fa8072',
    color2: '#f96353',
    progress: 90
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}

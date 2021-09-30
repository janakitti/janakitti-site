import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  numLandingImages: number = 3;
  landingImg: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.landingImg = Math.floor(Math.random() * this.numLandingImages);
  }
}

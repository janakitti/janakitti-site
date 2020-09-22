import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isCarouselMode = false;
  constructor() {}

  ngOnInit(): void {
  }

 toggleView(el: HTMLElement) {
    this.isCarouselMode = !this.isCarouselMode;
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }


}

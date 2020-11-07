import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-frame',
  templateUrl: './landing-frame.component.html',
  styleUrls: ['./landing-frame.component.css']
})
export class LandingFrameComponent implements OnInit {

  constructor() { }

  @Input()
  isDarkMode = false;
  @Input()
  image = '';

  ngOnInit(): void {
  }

}

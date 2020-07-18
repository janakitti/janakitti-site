import { Component, OnInit } from '@angular/core';
import {ProgressItems} from '../../../shared/interfaces';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.css']
})
export class ProgressBarsComponent implements OnInit {
  progressItems: ProgressItems[] = [
    { name: 'High School', percentage: 100, color1: '#ff6e63', color2: '#fc7e74' },
    { name: 'B.Eng SE', percentage: 25, color1: '#a13cc9', color2: '#ae54d1' },
    { name: 'This website', percentage: 8, color1: '#76dec2', color2: '#8fe3cc' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

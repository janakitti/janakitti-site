import { Component, OnInit } from '@angular/core';
import {ProgressItems} from '../../../shared/interfaces';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.css']
})
export class ProgressBarsComponent implements OnInit {
  progressItems: ProgressItems[];
  constructor() {
    const today = new Date().getTime();
    const seStart = new Date('September 7, 2019, 00:00:00').getTime();
    const seEnd = new Date('April 31, 2024, 00:00:00').getTime();
    const sePercentage = Math.round((today - seStart) / (seEnd - seStart) * 100);
    const coopStart = new Date('May 4, 2020, 00:00:00').getTime();
    const coopEnd = new Date('August 28, 2020, 00:00:00').getTime();
    const coopPercentage = Math.round((today - coopStart) / (coopEnd - coopStart) * 100);
    this.progressItems = [
      { name: 'B.A.Sc in Software Engineering', percentage: sePercentage, color1: '#a13cc9', color2: '#ae54d1' },
      { name: 'Coop @ Providius Corp', percentage: coopPercentage, color1: '#ff6e63', color2: '#fc7e74' },
      { name: 'This website', percentage: 60, color1: '#76dec2', color2: '#8fe3cc' }
    ];
  }

  ngOnInit(): void {
  }

}

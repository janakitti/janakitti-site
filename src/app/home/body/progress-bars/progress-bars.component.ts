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
      { name: 'Coop @ Providius Corp', percentage: coopPercentage, color1: '#69dbce', color2: '#7be0d5' },
      { name: 'Bachelor of Software Engineering', percentage: sePercentage, color1: '#a13cc9', color2: '#ae54d1' }
    ];
  }

  ngOnInit(): void {
  }

}

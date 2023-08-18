import { Component, OnInit } from '@angular/core';
import { ProgressItems } from '../../../shared/interfaces';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.css'],
})
export class ProgressBarsComponent implements OnInit {
  progressItems: ProgressItems[];
  constructor() {
    const today = new Date().getTime();
    const seStart = new Date('September 7, 2019, 00:00:00').getTime();
    const seEnd = new Date('April 31, 2024, 00:00:00').getTime();
    const sePercentage = Math.round(
      ((today - seStart) / (seEnd - seStart)) * 100
    );
    const otherStart = new Date('September 1, 2022, 00:00:00').getTime();
    const otherEnd = new Date('April 30, 2024, 00:00:00').getTime();
    const otherPercentage = Math.round(
      ((today - otherStart) / (otherEnd - otherStart)) * 100
    );
    this.progressItems = [
      {
        name: 'Bachelor of Software Engineering',
        link: 'uwaterloo.ca/future-students/programs/software-engineering',
        percentage: sePercentage,
        color1: '#a13cc9',
        color2: '#ae54d1',
      },
      {
        name: 'Spacewalk (Capstone Project)',
        link: '',
        percentage: otherPercentage,
        color1: '#ff00b3',
        color2: '#fc51aa',
      },
    ];
  }

  ngOnInit(): void {}
}

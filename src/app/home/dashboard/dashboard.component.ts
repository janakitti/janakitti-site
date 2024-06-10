import { Component } from '@angular/core';
import { ResponsiveService } from '../../core/responsive.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  statuses = [
    {
      title: 'Google APM',
      start: new Date('May 1, 2024, 00:00:00').getTime(),
      end: new Date('August 5, 2026, 00:00:00').getTime(),
      color1: '#FF25DC',
      color2: '#FA63E2',
    },
    {
      title: 'Bachelor of Software Engineering',
      start: new Date('September 7, 2019, 00:00:00').getTime(),
      end: new Date('April 31, 2024, 00:00:00').getTime(),
      color1: '#8525FF',
      color2: '#9759E6',
    },
    {
      title: 'Spacewalk | Engineering Capstone',
      start: new Date('September 1, 2022, 00:00:00').getTime(),
      end: new Date('April 31, 2024, 00:00:00').getTime(),
      color1: '#004FE9',
      color2: '#2E70F1',
    },
  ];
  today = new Date().getTime();
  constructor(public responsive: ResponsiveService) {}

  foo(start: number, end: number): Number {
    console.log(Math.round(((this.today - start) / (end - start)) * 100));
    return Math.round(((this.today - start) / (end - start)) * 100);
  }
}

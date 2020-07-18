import {Component, OnInit} from '@angular/core';
import {Resume} from '../../shared/interfaces';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: Resume = {
    projects: [
      {
        title: 'virtrolio',
        date: 'May 2020 - present',
        tech: ['apple'],
        description: ['Web service allowing students practicing physical distancing due to COVID-19 to sign each others yearbooks virtually',
          'Front-end work']
      }
    ],
    experiences: [
      {
        organization: 'Providius Corp',
        position: 'Software Engineering Coop',
        date: 'now',
        location: 'yes',
        description: ['yeeye']
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}

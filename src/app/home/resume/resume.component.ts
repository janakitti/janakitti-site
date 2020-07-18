import {Component, OnInit} from '@angular/core';
import {Resume} from '../../shared/interfaces';
import {FormattingService} from '../../core/formatting.service';

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
        tech: ['Angular', 'TypeScript', 'Firebase'],
        description: ['Web service allowing students practicing physical distancing due to COVID-19 to sign each others yearbooks virtually',
          'Front-end work']
      },
      {
        title: 'Tangible',
        date: 'Oct 2019 - Dec 2019',
        tech: ['Arduino', 'C++', 'Unity'],
        description: ['Built a “universal touchscreen” accessory with Arduino ultrasonic sensors to enable touchscreen capability\n' +
        'on non-touchscreen monitors',
          'Programmed a finger-mapping system to process sensor inputs as taps and gestures on the screen',
        'Developed a collection of touch-optimized C# applets to demonstrate effectiveness of hardware']
      }
    ],
    experiences: [
      {
        organization: 'Example',
        position: 'Coop',
        date: 'May 2020 - present',
        location: 'yes',
        description: ['Sample text']
      }
    ]
  };

  constructor(public formatService: FormattingService) {
  }

  ngOnInit(): void {
  }

}

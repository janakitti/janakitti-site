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
        title: 'FedoraField',
        date: 'Oct 2019 - present',
        tech: ['C#', 'Unity', 'Adobe Illustrator'],
        description: ['Developed a game in which players interact with enemy projectiles using gravitational and magnetic fields',
          'Modelled object interactions with various fields using the Unity physics engine',
          'Created a level loading system and an adaptive soundtrack using Unity coroutines']
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
        organization: 'Providius Corp',
        position: 'Software Engineering Co-op',
        date: 'May 2020 - present',
        location: 'Hamilton, ON',
        description: ['Developed Angular/Python web app for simulating real world data flow on a network']
      },
      {
        organization: 'Hack the North',
        position: 'Hacker',
        date: '2018 & 2019',
        location: 'Waterloo, ON',
        description: ['Participated as a hackathon hacker at Canada\'s biggest hackathon',
          '2018 | MAGNET: a projectile-catching robot',
          '2019 | CamHunt: a mobile app protoype for playing man-hunt using your mobile camera']
      },
      {
        organization: 'Team 4308: Absolute Robotics - FIRST Robotics',
        position: 'Programmer',
        date: 'Sep 2017 - Apr 2019',
        location: 'Mississauga, ON',
        description: ['Developed the computer vision pipeline to identify target objects on the playing field using Python',
                      'Qualified as 2018 FIRST Robotics World Championship Divisional Semi-Finalists',
                      'Rebranded the Absolute Robotics organization, increasing student engagement within the school']
      },
      {
        organization: 'DECA Business Competition',
        position: 'Entrepreneurial Competitor',
        date: 'Sep 2017 - Apr 2019',
        location: 'Mississauga, ON',
        description: ['Prepared a business plan and pitch for a startup company idea',
          'Competed at the international competition in Atlanta, Georgia']
      },
    ]
  };

  constructor(public formatService: FormattingService) {
  }

  ngOnInit(): void {
  }

}

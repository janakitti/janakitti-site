import { Component, OnInit } from '@angular/core';
import { SkillItem } from '../../../shared/interfaces';
import {FormattingService} from '../../../core/formatting.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  languages: SkillItem[] = [
    {name: 'Python'},
    {name: 'C++'},
    {name: 'TypeScript'},
    {name: 'JavaScript'},
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'SQL'}
  ];
  devtools: SkillItem[] = [
    {name: 'Git'},
    {name: 'Unity'},
    {name: 'Qt'},
    {name: 'WebStorm'},
    {name: 'VSCode'},
    {name: 'Postman'}
  ];
  creativetools: SkillItem[] = [
    {name: 'Figma'},
    {name: 'Illustrator'},
    {name: 'After Effects'},
    {name: 'Motion 5'},
    {name: 'Autodesk Inventor'},
    {name: 'MS PowerPoint'}
  ];
  frameworks: SkillItem[] = [
    {name: 'React'},
    {name: 'Angular'},
    {name: 'MongoDB'},
    {name: 'Mongoose'},
    {name: 'Firebase'},
    {name: 'Node.js'},
    {name: 'Express.js'},
    {name: 'Flask'},
    {name: 'Jest'},
  ];
  constructor(public formatService: FormattingService) { }

  ngOnInit(): void {
  }

}

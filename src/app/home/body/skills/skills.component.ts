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
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'SQL'}
  ];
  tools: SkillItem[] = [
    {name: 'Git'},
    {name: 'Unity'},
    {name: 'Adobe Illustrator'},
    {name: 'Adobe After Effects'},
    {name: 'Motion 5'},
    {name: 'Autodesk Inventor'},
    {name: 'MS PowerPoint'}
  ];
  frameworks: SkillItem[] = [
    {name: 'Firebase'},
    {name: 'Bootstrap'},
    {name: 'Angular'},
    {name: 'Flask'}
  ];
  constructor(public formatService: FormattingService) { }

  ngOnInit(): void {
  }

}

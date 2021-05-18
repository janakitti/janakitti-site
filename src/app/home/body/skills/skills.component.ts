import { Component, OnInit } from '@angular/core';
import { SkillItem } from '../../../shared/interfaces';
import { FormattingService } from '../../../core/formatting.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  languages: SkillItem[] = [
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'C' },
    { name: 'C++' },
    { name: 'C#' },
    { name: 'Java' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'SQL' },
  ];
  devtools: SkillItem[] = [
    { name: 'Git' },
    { name: 'Qt' },
    { name: 'WebStorm' },
    { name: 'VSCode' },
    { name: 'Postman' },
  ];
  creativetools: SkillItem[] = [
    { name: 'Figma' },
    { name: 'Illustrator' },
    { name: 'After Effects' },
    { name: 'Motion 5' },
    { name: 'Autodesk Inventor' },
    { name: 'MS PowerPoint' },
  ];
  frameworks: SkillItem[] = [
    { name: 'React' },
    { name: 'Redux' },
    { name: 'Angular' },
    { name: 'GraphQL' },
    { name: 'MongoDB' },
    { name: 'Mongoose' },
    { name: 'Firebase' },
    { name: 'PostgreSQL' },
    { name: 'Node.js' },
    { name: 'Express' },
    { name: 'Flask' },
    { name: 'Jest' },
    { name: 'Unity' },
  ];
  constructor(public formatService: FormattingService) {}

  ngOnInit(): void {}
}

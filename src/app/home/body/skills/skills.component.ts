import { Component, OnInit } from '@angular/core';
import { SkillItem } from '../../../shared/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  languages: SkillItem[] = [
    {name: 'Python', color: '#82cf06'},
    {name: 'C++', color: '#f77977'},
    {name: 'Typescript', color: '#ff9429'},
    {name: 'HTML', color: '#ff7700'},
    {name: 'CSS', color: '#fc0d55'},
    {name: 'SQL', color: '#35f2ad'}
  ];
  tools: SkillItem[] = [
    {name: 'Git', color: '#b98fc2'},
    {name: 'Unity', color: '#5d008f'},
    {name: 'Adobe Illustrator', color: '#e66b00'},
    {name: 'Adobe After Effects', color: '#8002ad'},
    {name: 'Motion 5', color: '#ff369e'},
    {name: 'Autodesk Inventor', color: '#f23d29'}
  ];
  frameworks: SkillItem[] = [
    {name: 'Firebase', color: '#f2c629'},
    {name: 'Bootstrap', color: '#bc1fd1'},
    {name: 'Angular', color: '#e30000'},
    {name: 'Flask', color: '#525151'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

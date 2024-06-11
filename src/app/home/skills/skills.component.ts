import { Component } from '@angular/core';
import { ResponsiveService } from '../../core/responsive.service';
import { CommonModule } from '@angular/common';
import { FormatService } from '../../core/format.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  languages: string[] = [
    'TypeScript',
    'JavaScript',
    'Python',
    'C++',
    'Go',
    'Bash',
    'HTML',
    'CSS',
    'SQL',
  ];

  technologies = [
    'React',
    'Angular',
    'LitElement',
    'Three.js',
    'Node.js',
    'Express',
    'Jest',
    'Unity',
    'Qt',
  ];

  tools = ['Git', 'VSCode', 'Postman'];

  creative = [
    'Figma',
    'Illustrator',
    'Procreate',
    'Houdini',
    'Motion 5',
    'Autodesk Inventor',
    'MS PowerPoint',
  ];
  constructor(
    public responsive: ResponsiveService,
    public format: FormatService
  ) {}
}

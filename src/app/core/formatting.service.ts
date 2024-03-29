import { Injectable } from '@angular/core';
import { SkillItem } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormattingService {
  skillpills = {
    Python: '#82cf06',
    'C++': '#f77977',
    C: '#bd7c3a',
    'C#': '#6b3eb3',
    Go: '#00a2cf',
    TypeScript: '#027be6',
    JavaScript: '#cfc400',
    Java: '#489ab8',
    HTML: '#ff7700',
    CSS: '#fc0d55',
    SQL: '#2b9e9a',
    Git: '#b98fc2',
    Unity: '#5d008f',
    Illustrator: '#e66b00',
    'After Effects': '#8002ad',
    Houdini: '#ff5e00',
    'Motion 5': '#ff369e',
    'Autodesk Inventor': '#f23d29',
    'MS PowerPoint': '#ff5e00',
    Firebase: '#f2c629',
    Bootstrap: '#bc1fd1',
    Angular: '#e30000',
    Flask: '#525151',
    Arduino: '#1aba9d',
    Qt: '#22e600',
    Figma: '#de009f',
    VSCode: '#004fbd',
    WebStorm: '#00cc8b',
    'Node.js': '#00a814',
    Express: '#bdb600',
    MongoDB: '#09b300',
    PostgreSQL: '#4d67a8',
    React: '#00cfc1',
    LitElement: '#8800ff',
    Redux: '#9600bf',
    GraphQL: '#de006f',
    Mongoose: '#9c2200',
    Jest: '#de3000',
    Postman: '#f26500',
    'Three.js': '#c4c700',
  };
  constructor() {}
}

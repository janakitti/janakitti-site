import { Injectable } from '@angular/core';
import {SkillItem} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormattingService {
  skillpills = {
    'Python': '#82cf06',
    'C++': '#f77977',
    'TypeScript': '#027be6',
    'HTML': '#ff7700',
    'CSS': '#fc0d55',
    'SQL': '#35f2ad',
    'Git': '#b98fc2',
    'Unity': '#5d008f',
    'Adobe Illustrator': '#e66b00',
    'Adobe After Effects': '#8002ad',
    'Motion 5': '#ff369e',
    'Autodesk Inventor': '#f23d29',
    'MS PowerPoint': '#ff5e00',
    'Firebase': '#f2c629',
    'Bootstrap': '#bc1fd1',
    'Angular': '#e30000',
    'Flask': '#525151',
    'Arduino': '#1aba9d',
  };
  constructor() { }
}

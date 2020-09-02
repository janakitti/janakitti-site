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
    'SQL': '#2b9e9a',
    'Git': '#b98fc2',
    'Unity': '#5d008f',
    'Illustrator': '#e66b00',
    'After Effects': '#8002ad',
    'Motion 5': '#ff369e',
    'Autodesk Inventor': '#f23d29',
    'MS PowerPoint': '#ff5e00',
    'Firebase': '#f2c629',
    'Bootstrap': '#bc1fd1',
    'Angular': '#e30000',
    'Flask': '#525151',
    'Arduino': '#1aba9d',
    'Qt': '#22e600',
    'Figma': '#de009f',
    'VSCode': '#004fbd',
    'WebStorm': '#00cc8b'
  };
  constructor() { }
}

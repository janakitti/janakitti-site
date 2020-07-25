import { Component, OnInit } from '@angular/core';
import {LinkItem} from '../../../../shared/interfaces';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links: LinkItem[] = [
    { name: 'LinkedIn', color: '', link: '//linkedin.com/in/janakittiratana/'},
    { name: 'GitHub', color: '', link: '//github.com/janakitti'},
    { name: 'DevPost', color: '', link: '//devpost.com/janakitti'},
    { name: 'ProductHunt', color: '', link: '//producthunt.com/@janakitti_ratana'},
    { name: 'Artwork', color: '', link: '//instagram.com/artwork.jr/'},
    { name: 'Mail', color: '', link: 'mailto:hello@janakitti.com'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

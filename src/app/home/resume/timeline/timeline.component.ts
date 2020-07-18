import { Component, OnInit } from '@angular/core';
import {Achievement} from '../../../shared/interfaces';

declare var $: any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  achievements: Achievement[] = [
    { title: 'DECA Provincial Champion', date: 'Jan 2020'},
    { title: 'DECA Provincial Champion', date: 'Aug 2019'},
    { title: ' University of Waterloo President\'s Scholarship', date: 'Jan 2020'},
    { title: 'Schulich Leader\'s Scholarship Winner', date: 'Jan 2020'},
    { title: 'Ted Rogers Scholar', date: 'Aug 2019'}
  ];
  constructor() { }

  ngOnInit(): void {

  }

}

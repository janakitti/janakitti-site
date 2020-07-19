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
    { title: 'Ted Rogers Scholar', date: 'Aug 2019'},
    { title: 'Schulich Leader\'s Scholarship Winner', date: 'Jan 2020'},
    { title: ' University of Waterloo President\'s Scholarship', date: 'Jan 2020'},
    { title: 'DECA Provincial Champion', date: 'Aug 2019'},
    { title: 'DECA Provincial Champion', date: 's'},
  ];
  constructor() { }

  ngOnInit(): void {
    $('#timeline-container-scroll').scrollLeft(1000);
  }

}

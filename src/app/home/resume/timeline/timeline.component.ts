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
    { title: 'Ted Rogers Scholar', date: '2019'},
    { title: 'Schulich Leader\'s Scholarship Winner', date: '2019'},
    { title: ' University of Waterloo President\'s Scholarship', date: '2019'},
    { title: 'DECA Provincial Champion', date: 'Apr 2019'},
    { title: 'DECA Provincial Champion', date: 'Apr 2018'},
  ];
  constructor() { }

  ngOnInit(): void {
    $('#timeline-container-scroll').scrollLeft(1000);
  }

}

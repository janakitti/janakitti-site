import { Component, OnInit } from '@angular/core';
import {DataService} from '../../core/data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent implements OnInit {

  constructor(public dataService: DataService) {
    AOS.init();
  }

  ngOnInit(): void {
  }

}

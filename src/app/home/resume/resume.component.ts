import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormattingService} from '../../core/formatting.service';
import {DataService} from '../../core/data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {

  constructor(public formatService: FormattingService, public dataService: DataService) {}

  ngOnInit(): void {
  }

}

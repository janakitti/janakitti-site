import {Component, OnInit} from '@angular/core';
import {Resume} from '../../shared/interfaces';
import {FormattingService} from '../../core/formatting.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: Resume = {projects: [], experiences: []};

  constructor(public formatService: FormattingService, private http: HttpClient) {
    this.http.get<Resume>('../../../assets/resume-data.json').subscribe(data => {
      this.resume = data;
    });
  }

  ngOnInit(): void {
  }

}

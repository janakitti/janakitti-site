import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../../core/data.service';
import {ProjectPage} from '../../shared/interfaces';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  pageData: ProjectPage = {
    title: "",
    body: []
  };

  constructor(public dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const project = this.route.snapshot.paramMap.get('project');
    this.dataService.getProject()
      .subscribe(data => this.pageData = data[project]);
  }
}

import { Injectable } from '@angular/core';
import {Resume} from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  resume: Resume = {projects: [], experiences: [], achievements: [], portfolios: []};
  constructor(private http: HttpClient) {
    this.http.get<Resume>('../../../assets/resume-data.json').subscribe(data => {
      this.resume = data;
    });
  }
}

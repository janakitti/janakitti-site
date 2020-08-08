import { Injectable } from '@angular/core';
import {GalleryItem, Resume} from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  resume: Resume = {projects: [], experiences: [], achievements: [], portfolios: []};
  gallery: GalleryItem[] = [];
  constructor(private http: HttpClient) {
    this.http.get<Resume>('../../../assets/resume-data.json').subscribe(data => {
      this.resume = data;
    });
    this.http.get<GalleryItem[]>('../../../assets/gallery-data.json').subscribe(data => {
      this.gallery = data;
    });
  }
}

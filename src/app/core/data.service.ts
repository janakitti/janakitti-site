import { Injectable } from '@angular/core';
import {GalleryItem, Resume, Carousel} from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  resume: Resume = {projects: [], experiences: [], achievements: [], portfolios: []};
  gallery: GalleryItem[] = [];
  carousels: Carousel[] = [];
  projectPages: Object = {};
  constructor(private http: HttpClient) {
    this.http.get<Resume>('../../../assets/resume-data.json').subscribe(data => {
      this.resume = data;
    });
    this.http.get<GalleryItem[]>('../../../assets/gallery-data.json').subscribe(data => {
      this.gallery = data;
    });
    this.http.get<Carousel[]>('../../../assets/carousel-data.json').subscribe(data => {
      this.carousels = data;
    });

  }

  getProject() {
    return this.http.get<Object>('../../../assets/portfolio-data.json');
  }
}

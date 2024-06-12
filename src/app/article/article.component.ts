import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const data = this.route.snapshot.paramMap.get('data');
    console.log(data);
  }

  sanitizeUrl(url: string): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

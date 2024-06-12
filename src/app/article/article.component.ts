import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { ResponsiveService } from '../core/responsive.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, MarkdownComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  id = '';
  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _markdownService: MarkdownService,
    public responsive: ResponsiveService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  update() {
    this._markdownService.reload();
  }

  getData(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  sanitizeUrl(url: string): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

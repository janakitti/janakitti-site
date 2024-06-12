import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppRoutingModule, MarkdownModule.forRoot()],
})
export class AppModule {}

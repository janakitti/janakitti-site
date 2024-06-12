import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a/:id', component: ArticleComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HushHushComponent } from './portfolio/hush-hush/hush-hush.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'hush-hush', component: HushHushComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

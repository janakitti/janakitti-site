import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectPageComponent } from './portfolio/project-page/project-page.component';
import { VirtrolioComponent } from './portfolio/virtrolio/virtrolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects/:project', component: ProjectPageComponent},
  { path: 'virtrolio', component: VirtrolioComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

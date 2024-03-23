import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ContactComponent } from './components/contact/contact.component';
import { PictureComponent } from './components/picture/picture.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'SpaceExploration'},
  { path: 'planets', component: PlanetsPageComponent, title: 'Planets'},
  { path: 'contact', component: ContactComponent, title: 'Contact'},
  { path: 'about', component: AboutComponent, title: 'About'},
  { path: 'picture', component: PictureComponent, title: 'Picture'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

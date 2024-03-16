import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { PlanetMercuryComponent } from './planet-mercury/planet-mercury.component';
import { PlanetMarsComponent } from './planet-mars/planet-mars.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent, PlanetMercuryComponent, PlanetMarsComponent],
  imports: [CommonModule],
  exports: [HomeComponent, HeroSectionComponent],
})
export class HomeModule {}

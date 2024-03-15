import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TextContentComponent } from './text-content/text-content.component';
import { PlanetMercuryComponent } from './planet-mercury/planet-mercury.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent, TextContentComponent, PlanetMercuryComponent],
  imports: [CommonModule],
  exports: [HomeComponent, HeroSectionComponent, TextContentComponent],
})
export class HomeModule {}

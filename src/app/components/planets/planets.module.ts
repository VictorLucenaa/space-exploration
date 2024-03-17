import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetMarsComponent } from './planet-mars/planet-mars.component';
import { PlanetMercuryComponent } from './planet-mercury/planet-mercury.component';

@NgModule({
  declarations: [PlanetMercuryComponent, PlanetMarsComponent],
  imports: [CommonModule],
  exports: [PlanetMercuryComponent, PlanetMarsComponent],
})
export class PlanetsModule {}

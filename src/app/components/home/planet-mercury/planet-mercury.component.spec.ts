import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetMercuryComponent } from './planet-mercury.component';

describe('PlanetMercuryComponent', () => {
  let component: PlanetMercuryComponent;
  let fixture: ComponentFixture<PlanetMercuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetMercuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetMercuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

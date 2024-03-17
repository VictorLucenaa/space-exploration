import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetMarsComponent } from './planet-mars.component';

describe('PlanetMarsComponent', () => {
  let component: PlanetMarsComponent;
  let fixture: ComponentFixture<PlanetMarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetMarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetMarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

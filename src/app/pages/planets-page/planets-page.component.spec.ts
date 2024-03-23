import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsPageComponent } from './planets-page.component';

describe('PlanetsPageComponent', () => {
  let component: PlanetsPageComponent;
  let fixture: ComponentFixture<PlanetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

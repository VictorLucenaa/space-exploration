import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  @Input() name: string = '';
  @Input() descriptionOne: string = '';
  @Input() descriptionTwo: string = '';
  @Input() imgUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

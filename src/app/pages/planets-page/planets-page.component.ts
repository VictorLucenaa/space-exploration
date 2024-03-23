import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.scss'],
})
export class PlanetsPageComponent implements OnInit {

  protected planets: Planet[] = [ // Pode fazer uma API para pegar os planetas ou consumir de outro lugar
    {
      name: 'Mars',
      descriptionOne:
        'Mars is the fourth planet from the Sun and the second smallest planet in the Solar System, being only larger than Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as “Red Planet”. The latter refers to the effect of the iron oxide prevalent on Mars’ Surface.',
      descriptionTwo:
        'Join us on an expedition to Mars, where you can witness the beauty of its desolate landscapes, marvel at its geological wonders, and perhaps catch a glimpse of Earth shining brightly in the Martian sky.',
      imgUrl: '/assets/images/planets/mars.webp',
    },
    {
      name: 'Mercury',
      descriptionOne:
        'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the sun takes 87.97 days, the shortest of all the planets inthe Solar System. It is named after the Roman deity Mercury, the messenger of the gods.',
      descriptionTwo:
        'Mercurys surface is a rugged landscape covered in tens of thousands of impact craters, showcasing its ancient history. From the surface, the Sun appears more than three times larger than from Earth, casting intense sunlight up to 11 times brighter.',
      imgUrl: '/assets/images/planets/mercury.webp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { IApod } from 'src/app/interfaces/iapod';
import { ApodService } from 'src/app/services/apod.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  apodData!: IApod;

  constructor(private apodService: ApodService, private datepipe: DatePipe) {}

  ngOnInit(): void {
    this.apodService.getApod().subscribe((response) => {
      this.apodData = response;
      console.log(this.apodData);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { IApod } from 'src/app/interfaces/iapod';
import { ApodService } from 'src/app/services/apod.service';
import { DatePipe } from '@angular/common';
import { delay } from 'rxjs';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  apodData!: IApod;
  isLoading: boolean = true;

  constructor(private apodService: ApodService, private datepipe: DatePipe) {}

  ngOnInit(): void {
    this.apodService
      .getApod()
      .pipe(delay(2500))
      .subscribe((response) => {
        this.apodData = response;
        this.isLoading = false;
      });
  }
}

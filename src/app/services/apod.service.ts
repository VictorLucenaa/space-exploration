import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApod } from '../interfaces/iapod';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApodService {
  api_key: string = 'pdK5KSAmlaNd0cNwQSLJVRH2xOBgvwTV1acGhDEn';
  apiUrl: string = 'https://api.nasa.gov/planetary/apod';
  localDate: string = '';

  constructor(private http: HttpClient) {
    const locale = 'en-US';
    const currentDate = new Date();

    this.localDate = formatDate(currentDate, 'yyyy-MM-dd', locale);
  }

  getApod(): Observable<IApod> {
    return this.http.get<IApod>(
      `${this.apiUrl}?api_key=${this.api_key}&date=${this.localDate}`
    );
  }
}

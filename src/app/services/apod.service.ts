import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IApod } from '../interfaces/iapod';
import { formatDate } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApodService {
  apiKey: string = environment.apiKey;
  apiUrl: string = 'https://api.nasa.gov/planetary/apod';
  localDate: string = '';
  previousDate: string = '';

  constructor(private readonly http: HttpClient) {
    const locale = 'en-US';
    const currentDate = new Date();

    this.localDate = formatDate(currentDate, 'yyyy-MM-dd', locale);
    this.previousDate = formatDate(
      new Date(currentDate.setDate(currentDate.getDate() - 1)),
      'yyyy-MM-dd',
      locale
    );
  }

  getApod$(): Observable<IApod> {
    return this.http
      .get<IApod>(
        `${this.apiUrl}?api_key=${this.apiKey}&date=${this.localDate}`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('request feito');
          if (error.status === 404) {
            return this.http.get<IApod>(
              `${this.apiUrl}?api_key=${this.apiKey}&date=${this.previousDate}`
            );
          }
          return throwError(() => new Error('Error 404'));
        })
      );
  }
}

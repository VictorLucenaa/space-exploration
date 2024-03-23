import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  constructor(private readonly http: HttpClient) {
    const locale = 'en-US';
    const currentDate = new Date();

    this.localDate = formatDate(currentDate, 'yyyy-MM-dd', locale); // Pode acontecer da api retornar um 404, pois a imagem do dia ainda não foi publicada. O que fazer nessa situação?
  }

  getApod$(): Observable<IApod> {
    return this.http.get<IApod>(
      `${this.apiUrl}?api_key=${this.apiKey}&date=${this.localDate}`
    );
  }
}

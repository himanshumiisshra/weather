import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { WeatherData } from '../weather/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(environment.weatherApiBaseUrl , {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}

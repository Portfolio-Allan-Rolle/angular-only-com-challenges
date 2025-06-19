import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCard } from '../views/weather-card/weather-card';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  private apiURL =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vitry-sur-seine/next7days?unitGroup=metric&include=days&key=CXQB252FLGZCCHCWYLSCL8FYF&contentType=json';

  public apiResponseTodayData: any;
  public apiResponseForecastData: any;

  ngOnInit(): void {
    this.http
      .get(this.apiURL)
      .pipe(map((res: any) => res['days']))
      .subscribe({
        next: (res) => {
          this.apiResponseTodayData = res.slice(0, 1);
          this.apiResponseForecastData = res.slice(1);
        },
        error: (err) => console.warn(err),
        complete: () => console.log('data fetch complete'),
      });
  }
}

import { Component, input } from '@angular/core';
import { DateFormatterPipe } from '../../pipes/date-formatter-pipe';

@Component({
  selector: 'app-weather-card',
  imports: [DateFormatterPipe],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.scss',
})
export class WeatherCard {
  dataFromApi = input.required<any[]>();
}

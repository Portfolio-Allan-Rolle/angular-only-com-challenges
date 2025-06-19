import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCard } from './weather-card';
import { By } from '@angular/platform-browser';

describe('WeatherCard', () => {
  let component: WeatherCard;
  let fixture: ComponentFixture<WeatherCard>;
  const mockData = [
    {
      datetime: '2025-06-19',
      datetimeEpoch: 1750284000,
      tempmax: 31.0,
      tempmin: 18.0,
      temp: 25.1,
      feelslikemax: 30.0,
      feelslikemin: 18.0,
      feelslike: 24.7,
      dew: 13.6,
      humidity: 51.4,
      precip: 0.0,
      precipprob: 0.0,
      precipcover: 0.0,
      preciptype: null,
      snow: 0.0,
      snowdepth: 0.0,
      windgust: 33.1,
      windspeed: 16.6,
      winddir: 45.1,
      pressure: 1022.9,
      cloudcover: 4.2,
      visibility: 18.7,
      solarradiation: 308.3,
      solarenergy: 26.7,
      uvindex: 9.0,
      severerisk: 10.0,
      sunrise: '05:46:57',
      sunriseEpoch: 1750304817,
      sunset: '21:57:00',
      sunsetEpoch: 1750363020,
      moonphase: 0.79,
      conditions: 'Clear',
      description: 'Clear conditions throughout the day.',
      icon: 'clear-day',
      stations: [
        '91027002',
        '75116008',
        '78620001',
        '78640001',
        '75114001',
        '95088001',
        'C1292',
        'LFPO',
        'remote',
      ],
      source: 'comb',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCard],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('dataFromApi', mockData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the data correctly', () => {
    const paragraphs = fixture.debugElement.queryAll(By.css('p'));
    expect(paragraphs[0].nativeElement.textContent.split(' ').length).toBe(3);
    expect(paragraphs.length).toBe(3);
  });
});

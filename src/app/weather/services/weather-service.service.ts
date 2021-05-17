import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiUbication = "https://freegeoip.app/json/";

  constructor() { }

  async dateUbication() {
    const response = await fetch(this.apiUbication);
    return await response.json();
  }

  async dateWeather(longitude: string, latitude: string) {
    const response = await fetch(`http://www.7timer.info/bin/civillight.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json`);
    return await response.json();
  }

}

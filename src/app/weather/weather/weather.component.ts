import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  datos;
  infoWeather;
  dataTemperature;
  date;
  city: string;
  country: string;
  loading: boolean;
  nameUser: string;

  constructor(private weatherServiceService:WeatherServiceService, private router:Router) {
    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');
    this.nameUser = name + ' ' + surname;
   }

  ngOnInit(): void {
    this.getDateUbication();
    
  }

  async getDateUbication() {
    this.loading = true;
    await this.weatherServiceService.dateUbication().then(data => this.datos = data);
    this.city = this.datos.city;
    this.country = this.datos.country_name;
    const latitude = this.datos.latitude;
    const longitude = this.datos.longitude;
    this.getDataWeather(longitude, latitude);
  }

  async getDataWeather(longitude, latitude) {
    await this.weatherServiceService.dateWeather(longitude, latitude).then(info => this.infoWeather = info);
    this.dataTemperature  = this.infoWeather.dataseries.slice(0, 1)[0];
    this.date = this.parsearDate(this.dataTemperature.date);
    this.loading = false;
  }

  parsearDate(value) {
    value = "" + value;
    if (!value) {
      return "";
    }
    let year = value.substring(0, 4);
    let month = value.substring(4, 6);
    let day = value.substring(6, 8);
    return day + "-" + month + "-" + year;
  }

  logOut() {
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('surname');
    this.router.navigateByUrl('');
  }

}

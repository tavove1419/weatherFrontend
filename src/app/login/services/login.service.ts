import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlNode = environment.routeGlobalNode;
  constructor(private http: HttpClient) { }

  openLogin(params): Observable<any> {
    return this.http.post(`${this.urlNode}/auth/login`, params);
  }
}
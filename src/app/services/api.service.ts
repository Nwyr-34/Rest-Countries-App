import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://restcountries.com/v3.1/'
  constructor(private http:HttpClient) { }

  public getAllCountries(): Observable<any>{
    return this.http.get<Country[]>(this.urlApi+'all');
  }
  public getCountryByName(name: String): Observable<any>{
    return this.http.get<Country[]>(this.urlApi+'name/'+name).pipe(
        map(([res])=>res )
    );
  }




}

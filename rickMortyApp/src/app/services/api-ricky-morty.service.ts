import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, throwError } from 'rxjs';
import { Location, RickyMorty, episode } from '../models/ricky-morty';

@Injectable({
  providedIn: 'root'
})
export class ApiRickyMortyService {


  constructor(private http: HttpClient) { }


  public getCaracter(): Observable<any> {
    let apiUrl = "https://rickandmortyapi.com/api/character"
    return this.http.get<RickyMorty>(apiUrl);
  }
  public getCaracterByName(name: string): Observable<any> {
    let apiUrl = `https://rickandmortyapi.com/api/character/?name=${name}`
    return this.http.get<RickyMorty>(apiUrl).pipe(
      catchError(err => throwError(() => new Error('error en el servicio')))
    )
  }
  public getCaracterFilter(status?: string, species?: string, type?: string, gender?: string): Observable<any> {
    let apiUrl = `https://rickandmortyapi.com/api/character/?status=${status}&species=${species}&type=${type}&gender=${gender}`
    return this.http.get<RickyMorty>(apiUrl).pipe(
      catchError(err => throwError(() => new Error('error en el servicio')))
    )
  }


  public getCaracterId(id: number): Observable<any> {
    let apiUrl = `https://rickandmortyapi.com/api/character/${id}`
    return this.http.get<RickyMorty>(apiUrl);
  }
  public getEpisodes(): Observable<any> {
    let apiUrl = "https://rickandmortyapi.com/api/episode"
    return this.http.get<episode>(apiUrl);
  }
  public getEpisodesId(id: string): Observable<any> {
    let apiUrl = `https://rickandmortyapi.com/api/episode/${id}`
    return this.http.get<episode>(apiUrl);
  }

  public getPlaces(): Observable<any> {
    let apiUrl = "https://rickandmortyapi.com/api/location"
    return this.http.get<Location>(apiUrl);
  }
  public getLocationId(id: number): Observable<any> {
    let apiUrl = `https://rickandmortyapi.com/api/location/${id}`
    return this.http.get<Location>(apiUrl);
  }
}

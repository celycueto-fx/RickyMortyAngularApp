import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiRickyMortyService {


  constructor(private http: HttpClient) { }


  public getCaracter(): Observable<any> {
    let apiUrl="https://rickandmortyapi.com/api/character"
    return this.http.get<any>(apiUrl);
  }
  public getCaracterId(id:number): Observable<any> {
    let apiUrl=`https://rickandmortyapi.com/api/character/${id}`
    return this.http.get<any>(apiUrl);
  }
  public getEpisodes(): Observable<any> {
    let apiUrl="https://rickandmortyapi.com/api/episode"
    return this.http.get<any>(apiUrl);
  }
  public geEpisodesId(id:number): Observable<any> {
    let apiUrl=`https://rickandmortyapi.com/api/episode/${id}`
    return this.http.get<any>(apiUrl);
  }

  public getPlaces(): Observable<any> {
    let apiUrl="https://rickandmortyapi.com/api/location"
    return this.http.get<any>(apiUrl);
  }
  public getLocationId(id:number): Observable<any> {
    let apiUrl=`https://rickandmortyapi.com/api/location/${id}`
    return this.http.get<any>(apiUrl);
  }
}

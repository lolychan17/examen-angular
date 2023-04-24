import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IPokemon } from '../interface/pokemon.interface';
import { environment } from 'src/environments/enviroments';

const API_GET_ALL_EMPLOYEE = environment.API_GET_ALL_POKEMON;
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  createHeader(){
    let headers: HttpHeaders;
      headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Acces-Control-Allow_Origin', '*');
    return headers;
  }

  getAllEmployee(){
    return this.http.get<IPokemon>(API_GET_ALL_POKEMON);
  }

}
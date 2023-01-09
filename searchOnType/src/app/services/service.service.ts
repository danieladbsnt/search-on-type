import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { University } from '../interfaces/university';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private url: string = 'http://localhost:3000/universidades';

  constructor(private http: HttpClient) { }

  getDataSpain() {
    return this.http.get<University[]>(`${this.url}?q=españa`)
  }

  getDataUk() {
    return this.http.get<University[]>(`${this.url}?q=reino&unido`)
  }

  getDataPortugal() {
    return this.http.get<University[]>(`${this.url}?q=portugal`)
  }

  getDataTyping(termino: string) {
    return this.http.get<University[]>(`${this.url}?q=${termino}`)
  }
 }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from "../data/data.json";
import { Flight } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getData(): Observable<Flight[]> {
    return of(data)
  }
}

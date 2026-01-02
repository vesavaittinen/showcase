import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchkinodataService {
  private http = inject(HttpClient);  
  url: any;
  
  constructor() {
    this.url = 'https://api.chucknorris.io/jokes/random';
  }
  getFinnkinoData(): Observable<any> {
      return this.http.get<any[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchkinodataService {
  url: any;
  constructor(private http: HttpClient) {
    this.url = 'https://www.finnkino.fi/xml/News/';
  }
  getFinnkinoData(): Observable<any> {
      // pipe kokoaa operaattorit yhteen (map, filter, etc)
      // map operaattori, tyypin muuttamiseen (esim. response => json-tyyppiseksi)
      // filter operaattori, suodatus annetun ehdon mukaan
      return this.http.get(this.url, { responseType: 'text' }).pipe(map(response => {
      let newsData: any;
      parseString(response, { trim: true, explicitArray: false, mergeAttrs: true},
        function (err: any, result: any) {
          newsData = result.News.NewsArticle;
        }
      );
      return newsData;
      }));
  }
}

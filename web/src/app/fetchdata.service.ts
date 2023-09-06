import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  url = "http://localhost:3000/v1/subdivisions/page/1";

  constructor(private http:HttpClient) {}

  getData(pageNumber: number): Observable<any> {
    const targeturl = `${this.url}/${pageNumber}`;
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }
}

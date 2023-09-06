import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  url = "http://localhost:3000/v1/subdivisions";

  constructor(private http:HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }
}

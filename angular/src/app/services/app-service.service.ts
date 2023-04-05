import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  url = "http://localhost:3000/data"

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
}

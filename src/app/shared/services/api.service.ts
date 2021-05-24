import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }
  get(path: string): Observable<any> {
    return this.http.get(path);
  }
  post(path: string, body: any): void {
    this.http.post(path, body);
  }
  put(path: string, body: any): void{
    this.http.put(path, body);
  }
  delete(path: string, body: any) : void {
    this.http.delete(path, body);
  }
}

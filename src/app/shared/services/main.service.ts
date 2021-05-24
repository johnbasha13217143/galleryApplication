import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
import {Common, Gallery, mapGalleryProducts, mapUserDetails} from "../models/common.model";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  path = environment.Url;
  gallery = environment.Gallery;
  infoData: any;
  userData: BehaviorSubject<Common[]> = new BehaviorSubject<Common[]>([]);

  constructor(
    private api: ApiService
  ) {
  }

  postUser(array: any): void {
    window.localStorage.setItem('userData', JSON.stringify(array));
  }
  login(): Observable<any> {
  return  this.api.get(this.path).pipe(map((user: Array<any>)=> user.map(u=>mapUserDetails(u))));
  }
  getGalleryImages():Observable<Gallery[]> {
    return this.api.get(this.gallery).pipe(map((gallery: Array<any>)=> gallery.map(g=>mapGalleryProducts(g))));
  }
}

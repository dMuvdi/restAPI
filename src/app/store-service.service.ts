import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from './store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  constructor(private httpClient : HttpClient) { }

  public getStores(url:string):Observable<Store[]>{
    return this.httpClient.get<Store[]>(url)
  }


}

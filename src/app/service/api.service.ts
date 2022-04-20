import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

posts:any =[]
  constructor( private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/photos")
    .pipe(map((res:any) => {
      return res;
    }))
 
    
 }



}



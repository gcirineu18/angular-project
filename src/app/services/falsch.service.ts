import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FalschService {

  constructor(private http: HttpClient) { }

  getDataV1():Observable<any>{

    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    return this.http.get(url);
  }

  getDataV2():Observable<any>{

    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    return this.http.get(url).pipe(
      tap((data: any)=> console.log('Data Fetched :: ', data))
    );
  }


}


import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';



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
      tap((data: any)=> console.log('Data Fetched :: ', data)),
      catchError(this.handleError('Fail to fetch data.'))
    );
  }

  private handleError<T>(operation='operation'){
     return(error:HttpErrorResponse): Observable<T> =>{

      console.log(error)
      const message = `server returned code ${error.status} with body "${error.error}" `
      
      throw new Error(`${operation} failed: ${message}`)
    }
     
  }


  postDataV1(data: any):Observable<any>{

    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const httpOptions = {
      Headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(data,url,httpOptions);
  }


}


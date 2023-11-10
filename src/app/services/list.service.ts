import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  
  constructor(private http:HttpClient,) { }

  
  
  
  
  remove(animals: Animal[], animal:Animal){

    console.log('Ativando o service');
    
    return animals.filter((a)=> animal.name !== a.name)
  }

  duplica(animals:Animal[], animal: Animal){

    return animals.map((a)=> {
      if(a ===animal){ 
        return{name: a.name, type: a.type, age: 2*a.age  } 
      }
      else return a;
    }
    );
  }

  getAll(): Observable<Animal[]>{

     return this.http.get<Animal[]>(this.apiUrl)
  }

}

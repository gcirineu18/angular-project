import { Component } from '@angular/core';
import {Animal} from 'src/app/Animal'
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  
public name:string=''
  
  setName(name:string){
    this.name = name
  }
  getName(){
    return this.name
  }
  /*Com a propriedade da interface é
  necessário seguir todas as variáveis
  que se têm dclaradas */



  public animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 11 },
    { name: 'Bob', type: 'Horse', age: 2 },
  ];

  today = new Date();

  animalDetail ='';
  number = 0;
  constructor() {}


  showAge(animal:Animal){
    this.animalDetail =  `O pet ${animal.name} tem ${animal.age} anos de vida!`;
  }

  onChangeNumber(){
    this.number = Math.floor(Math.random()* 10);
  }

 
}

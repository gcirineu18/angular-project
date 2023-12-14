import { Component } from '@angular/core';
import {Animal} from 'src/app/Animal'
import { ListService } from 'src/app/services/list.service';

//import { ListService } from 'src/app/services/list.service';
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
  // Com a propriedade da interface é
 // necessário seguir todas as variáveis
 // que se têm declaradas 


  public animals: Animal[] = [
   
  ];

  today = new Date();

  animalDetail ='';
  number = 0;

  constructor(private listService: ListService) 
{
  this.getAnimals();
}


  showAge(animal:Animal){
    this.animalDetail =  `O pet ${animal.name} tem ${animal.age} anos de vida!`;
  }

  onChangeNumber(){
    this.number = Math.floor(Math.random()* 10);
  }


  removeAnimal(animal:Animal){
    console.warn("Removendo animal");
    this.animals = this.listService.remove(this.animals, animal);
  }

  doubleAge(animal:Animal){  
    console.warn("Duplicando a idade");
    this.animals = this.listService.duplica(this.animals,animal);
  }

  getAnimals():void{
    this.listService.getAll().subscribe((animals)=>
    (this.animals = animals)
    );
  }
 
}

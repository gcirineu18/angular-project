import { Component } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  /*The page no longer displays properly because it was 
  changed the hero from a string to an object. */
  hero :Hero = {
     id: 1,
    name: 'Windstorm'
  } 
  msg : string = "Testing"
}

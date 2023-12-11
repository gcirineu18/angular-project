import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers-jest',
  templateUrl: './matchers-jest.component.html',
  styleUrls: ['./matchers-jest.component.scss']
})
export class MatchersJestComponent {


  compileAndroidCode(){
    throw new Error('du benutzt alt Angular.')
  }
}

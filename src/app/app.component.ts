import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // title = '角度';
 title = 'AngularJestSetup';

  
 sum(a:number,b:number)
 {

  return a+b
}

}

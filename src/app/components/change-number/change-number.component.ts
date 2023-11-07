import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter()
  handleClick(){ 
    this.changeNumber.emit()
    console.log('Die Nummer hat sich geändert')
  }
}

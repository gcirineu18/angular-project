import { Component, OnInit } from '@angular/core';
import { FalschService } from '../services/falsch.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {


serviceData: any;
errorMessage: any;

  constructor(private fakeService: FalschService){}

  ngOnInit(): void {
      this.getServiceData();
  }

  getServiceData(){
    this.fakeService.getDataV1().subscribe(
      {
        next: data =>{
            this.serviceData = data;
        },
        error: err =>{
                this.errorMessage = err.statusText; 

        },
        complete: () =>{
          console.log('Finished.\n')
        }
      }
    );
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FalschService } from '../services/falsch.service';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(async () => {

    fakeServiceMock = {
      getDataV1: jest.fn()
    }

    await TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers: [
        {
          provide: FalschService, useValue: fakeServiceMock
        }
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

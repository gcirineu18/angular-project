

import { of } from 'rxjs/internal/observable/of';
import { FalschService } from './falsch.service';

describe('FalschService', () => {
  let service: FalschService;
  let httpClientSpy: any;
  beforeEach(() => {

    httpClientSpy={
      // mocking a function
      get: jest.fn()
    };
    
    service = new FalschService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getDataV1', ()=>{
     const res = 'Schlüssel-Wort';
     const url = 'https://jsonplaceholder.typicode.com/todos/1';
     jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
     
     //triggering the method:
     service.getDataV1();
     expect(httpClientSpy.get).toHaveBeenCalledTimes(1)
     expect(httpClientSpy.get).toHaveBeenCalledWith(url)


  })
});

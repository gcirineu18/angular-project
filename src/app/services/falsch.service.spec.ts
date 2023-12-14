import { HttpErrorResponse } from '@angular/common/http';


import { of } from 'rxjs/internal/observable/of';
import { FalschService } from './falsch.service';
import { throwError } from 'rxjs';

describe('FalschService', () => {
  let service: FalschService;
  let httpClientSpy: any;
  beforeEach(() => {

    httpClientSpy={
      // mocking a function
      get: jest.fn(),
      post: jest.fn()
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

  it('should getDataV2 throw error', (done: () =>any)=>{
    const errorResponse = new HttpErrorResponse({
      error:'test 404 error',
      status: 404, statusText: 'Not Found.'
    });
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(() => errorResponse));
    
    //triggering the method:
    // As it is of type Observable, subscribe is needed
    service.getDataV2().subscribe(
      {
        next: data => console.log(data),

        error: error => {
          expect(error.message).toContain('test 404 error')
          done();
        }


      }
    );
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1)
    expect(httpClientSpy.get).toHaveBeenCalledWith(url)

 })


 it('should test getDataV2', (done: () =>any)=>{
  const res = 'Schlüssel-Wort';
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
  
  //triggering the method:
  // As it is of type Observable, subscribe is needed
  service.getDataV2().subscribe(
    {
      next: data =>{
        expect(data).toEqual(res);
        // If you miss to call the done callback, then
        // the test does not know when the response comes, so
        // it will fail with the timeout error
        done();
      },
      error: error => console.log(error)


    }
  );
  expect(httpClientSpy.get).toHaveBeenCalledTimes(1)
  expect(httpClientSpy.get).toHaveBeenCalledWith(url)

})

// Post call
it('should test postDataV1', () =>{
  const command = 'testing';
  const res = '现在我什么都不知道';
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));

  service.postDataV1(command);

  expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
  
})

});






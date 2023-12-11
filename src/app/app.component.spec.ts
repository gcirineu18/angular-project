
import { AppComponent } from './app.component';

// npm run test

describe('AppComponent', () => {

  
  
  let fixture: AppComponent;

  beforeEach(async () => {
    fixture = new AppComponent()
  });

  it('should have a title AngularJestSetup', () => {
   
    expect(fixture.title).toEqual('AngularJestSetup');
  });

  it(`adds 1 + 2 to equal 3`, () => {
    
    expect(fixture.sum(1,2)).toBe(3);
  });

})
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJestComponent } from './matchers-jest.component';

describe('MatchersJestComponent', () => {
  let component: MatchersJestComponent;
  let fixture: ComponentFixture<MatchersJestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersJestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersJestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// exakte Gleichheit
it('Zwei plus zwei ist vier.', () => {
  expect(2+2).toBe(4 );
});


it('Object Values', () => {
  const data = {name:'tibDoce'}
  expect(data).toEqual({name:"tibDoce"})
});

// Truthiness
it('null', () =>{
 const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
})

// exakte Gleichheit
it('Zwei plus zwei ist vier.', () => {
 const value = 2 + 2;

 expect(value).toBeGreaterThan(3);
 expect(value).toBeGreaterThanOrEqual(4)
 expect(value).toBeLessThan(5)
 expect(value).toBeLessThanOrEqual(4.5)


});


// Floating Point numbers
it('adding floating point numbers', () =>{

  const value = 0.1 + 0.2;

//   expect(value).toBeCloseTo(0.3); This will not works because of rounding error

  expect(value).toBeCloseTo(0.3);

})

// Strings
it('Es gibt tatsächlich nicht', () =>{

  expect('nicht').toMatch(/n/);

})

// Arrays and iterables:

it('Könnte es sein, dass es auf der Einkaufsliste steht', () =>{

  const list = [
    'äpfel',
    'mango',
    'zitronne',
    'erdbeer'
  ]
  expect(list).toContain('mango')

})

// Exceptions
it('compiling goes as expected',() =>{
  expect(() => component.compileAndroidCode()).toThrow();
  expect(() => component.compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => component.compileAndroidCode()).toThrow('du benutzt alt Angular');
  expect(() => component.compileAndroidCode()).toThrow(/Angular/);
})

});
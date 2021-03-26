import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let buttonLess: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it( 'button less click and called fn', () => {
    buttonLess = fixture.nativeElement.querySelector('button#less');
    expect(buttonLess.textContent).toContain('-');
    component.operationMath = jasmine.createSpy();
    buttonLess.click();
    expect(component.operationMath).toHaveBeenCalled();
  });
  it( 'button plus click and called fn', () => {
    buttonLess = fixture.nativeElement.querySelector('button#plus');
    expect(buttonLess.textContent).toContain('+');
    component.operationMath = jasmine.createSpy();
    buttonLess.click();
    expect(component.operationMath).toHaveBeenCalled();
  });
  it('checking function operation Math', () => {
    const count: number = component.counter;
    expect(count).toBe(0);
    component.operationMath('less');
    expect(component.counter).toBe(-1);
    component.operationMath('plus');
    expect(component.counter).toBe(0);
  });
});

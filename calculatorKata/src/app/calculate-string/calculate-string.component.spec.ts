import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateStringComponent } from './calculate-string.component';

describe('CalculateStringComponent', () => {
  let component: CalculateStringComponent;
  let fixture: ComponentFixture<CalculateStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should evaluate to 0', () => {
    expect(component.add('')).toEqual(0);
  });

  checkResult("", 0);
  checkResult("42", 42);
  checkResult('1,2', 3);
  checkResult('1,2,3', 6);
  checkResult('1\n2,3', 6);
  checkResult('1,\n', 1);
  function checkResult(expression: any, result: any) {
    it('should evaluate' +expression+  'to' +result, function (){
      expect(component.add(expression)).toEqual(result);
    });
  }
});

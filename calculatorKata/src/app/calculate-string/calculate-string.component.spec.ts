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
});

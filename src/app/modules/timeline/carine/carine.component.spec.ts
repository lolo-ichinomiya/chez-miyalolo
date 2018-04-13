import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarineComponent } from './carine.component';

describe('CarineComponent', () => {
  let component: CarineComponent;
  let fixture: ComponentFixture<CarineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

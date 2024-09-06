import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeAcuerdoComponent } from './de-acuerdo.component';

describe('DeAcuerdoComponent', () => {
  let component: DeAcuerdoComponent;
  let fixture: ComponentFixture<DeAcuerdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeAcuerdoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeAcuerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

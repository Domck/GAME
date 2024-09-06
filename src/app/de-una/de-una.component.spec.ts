import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeUnaComponent } from './de-una.component';

describe('DeUnaComponent', () => {
  let component: DeUnaComponent;
  let fixture: ComponentFixture<DeUnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeUnaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeUnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

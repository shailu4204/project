import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatpageComponent } from './seatpage.component';

describe('SeatpageComponent', () => {
  let component: SeatpageComponent;
  let fixture: ComponentFixture<SeatpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

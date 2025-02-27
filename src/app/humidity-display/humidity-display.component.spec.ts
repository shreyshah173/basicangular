import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityDisplayComponent } from './humidity-display.component';

describe('HumidityDisplayComponent', () => {
  let component: HumidityDisplayComponent;
  let fixture: ComponentFixture<HumidityDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumidityDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumidityDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

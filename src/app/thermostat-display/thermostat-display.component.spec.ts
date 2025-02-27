import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermostatDisplayComponent } from './thermostat-display.component';

describe('ThermostatDisplayComponent', () => {
  let component: ThermostatDisplayComponent;
  let fixture: ComponentFixture<ThermostatDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThermostatDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermostatDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

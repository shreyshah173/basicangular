import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityIndexComponent } from './air-quality-index.component';

describe('AirQualityIndexComponent', () => {
  let component: AirQualityIndexComponent;
  let fixture: ComponentFixture<AirQualityIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirQualityIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirQualityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

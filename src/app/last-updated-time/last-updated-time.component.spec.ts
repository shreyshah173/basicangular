import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUpdatedTimeComponent } from './last-updated-time.component';

describe('LastUpdatedTimeComponent', () => {
  let component: LastUpdatedTimeComponent;
  let fixture: ComponentFixture<LastUpdatedTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastUpdatedTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastUpdatedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

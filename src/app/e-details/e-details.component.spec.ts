import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDetailsComponent } from './e-details.component';

describe('EDetailsComponent', () => {
  let component: EDetailsComponent;
  let fixture: ComponentFixture<EDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

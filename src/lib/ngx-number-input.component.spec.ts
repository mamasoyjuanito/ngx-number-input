import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNumberInputComponent } from './ngx-number-input.component';

describe('NgxNumberInputComponent', () => {
  let component: NgxNumberInputComponent;
  let fixture: ComponentFixture<NgxNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

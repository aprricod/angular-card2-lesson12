import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackCompComponent } from './black-comp.component';

describe('BlackCompComponent', () => {
  let component: BlackCompComponent;
  let fixture: ComponentFixture<BlackCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

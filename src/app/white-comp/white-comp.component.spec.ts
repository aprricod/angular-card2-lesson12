import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteCompComponent } from './white-comp.component';

describe('WhiteCompComponent', () => {
  let component: WhiteCompComponent;
  let fixture: ComponentFixture<WhiteCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

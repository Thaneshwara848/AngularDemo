import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABC1Component } from './abc1.component';

describe('ABC1Component', () => {
  let component: ABC1Component;
  let fixture: ComponentFixture<ABC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABC1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABC2Component } from './abc2.component';

describe('ABC2Component', () => {
  let component: ABC2Component;
  let fixture: ComponentFixture<ABC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABC2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirictivedemoComponent } from './dirictivedemo.component';

describe('DirictivedemoComponent', () => {
  let component: DirictivedemoComponent;
  let fixture: ComponentFixture<DirictivedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirictivedemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirictivedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

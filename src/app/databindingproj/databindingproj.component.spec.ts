import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingprojComponent } from './databindingproj.component';

describe('DatabindingprojComponent', () => {
  let component: DatabindingprojComponent;
  let fixture: ComponentFixture<DatabindingprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingprojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

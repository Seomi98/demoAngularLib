import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExComponent } from './demo-ex.component';

describe('DemoExComponent', () => {
  let component: DemoExComponent;
  let fixture: ComponentFixture<DemoExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

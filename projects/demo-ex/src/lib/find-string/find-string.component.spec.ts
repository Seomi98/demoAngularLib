import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStringComponent } from './find-string.component';

describe('FindStringComponent', () => {
  let component: FindStringComponent;
  let fixture: ComponentFixture<FindStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

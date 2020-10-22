import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopByComponent } from './develop-by.component';

describe('DevelopByComponent', () => {
  let component: DevelopByComponent;
  let fixture: ComponentFixture<DevelopByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

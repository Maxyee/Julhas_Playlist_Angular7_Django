import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevideosComponent } from './updatevideos.component';

describe('UpdatevideosComponent', () => {
  let component: UpdatevideosComponent;
  let fixture: ComponentFixture<UpdatevideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatevideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

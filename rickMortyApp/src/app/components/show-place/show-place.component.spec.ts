import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlaceComponent } from './show-place.component';

describe('ShowPlaceComponent', () => {
  let component: ShowPlaceComponent;
  let fixture: ComponentFixture<ShowPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPlaceComponent]
    });
    fixture = TestBed.createComponent(ShowPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

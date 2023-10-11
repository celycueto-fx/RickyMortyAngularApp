import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlaceDetailComponent } from './show-place-detail.component';

describe('ShowPlaceDetailComponent', () => {
  let component: ShowPlaceDetailComponent;
  let fixture: ComponentFixture<ShowPlaceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPlaceDetailComponent]
    });
    fixture = TestBed.createComponent(ShowPlaceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

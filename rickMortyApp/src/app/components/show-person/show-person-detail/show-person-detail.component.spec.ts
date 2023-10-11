import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonDetailComponent } from './show-person-detail.component';

describe('ShowPersonDetailComponent', () => {
  let component: ShowPersonDetailComponent;
  let fixture: ComponentFixture<ShowPersonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPersonDetailComponent]
    });
    fixture = TestBed.createComponent(ShowPersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

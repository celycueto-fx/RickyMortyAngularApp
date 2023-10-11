import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEspisodeComponent } from './show-espisode.component';

describe('ShowEspisodeComponent', () => {
  let component: ShowEspisodeComponent;
  let fixture: ComponentFixture<ShowEspisodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEspisodeComponent]
    });
    fixture = TestBed.createComponent(ShowEspisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

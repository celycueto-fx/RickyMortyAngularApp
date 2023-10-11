import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEpisodeDetailComponent } from './show-episode-detail.component';

describe('ShowEpisodeDetailComponent', () => {
  let component: ShowEpisodeDetailComponent;
  let fixture: ComponentFixture<ShowEpisodeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEpisodeDetailComponent]
    });
    fixture = TestBed.createComponent(ShowEpisodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

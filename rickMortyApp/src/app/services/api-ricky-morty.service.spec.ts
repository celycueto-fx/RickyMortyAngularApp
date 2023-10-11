import { TestBed } from '@angular/core/testing';

import { ApiRickyMortyService } from './api-ricky-morty.service';

describe('ApiRickyMortyService', () => {
  let service: ApiRickyMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRickyMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

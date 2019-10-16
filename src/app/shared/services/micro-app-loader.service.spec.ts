import { TestBed } from '@angular/core/testing';

import { MicroAppLoaderService } from './micro-app-loader.service';

describe('MicroAppLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroAppLoaderService = TestBed.get(MicroAppLoaderService);
    expect(service).toBeTruthy();
  });
});

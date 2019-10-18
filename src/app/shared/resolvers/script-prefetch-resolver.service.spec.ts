import { TestBed } from '@angular/core/testing';

import { ScriptPrefetchResolverService } from './script-prefetch-resolver.service';

describe('ScriptPrefetchResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScriptPrefetchResolverService = TestBed.get(ScriptPrefetchResolverService);
    expect(service).toBeTruthy();
  });
});

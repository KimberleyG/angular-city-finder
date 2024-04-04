import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cityResolver } from './city.resolver';
import { VilleApiModel } from './geo-api.service';

describe('cityResolverResolver', () => {
  const executeResolver: ResolveFn<VilleApiModel[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => cityResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

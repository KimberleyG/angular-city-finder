import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GeoApiService, VilleApiModel } from './geo-api.service';

/** permet de précharger les villes du département sélectionné */
export const cityResolver: ResolveFn<VilleApiModel[]> = (route, state,) => {
  return inject(GeoApiService).getVilleListByDepartementCode(route.params['code']);
};

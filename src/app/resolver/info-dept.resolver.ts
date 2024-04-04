import type { ResolveFn } from '@angular/router';
import { DepartementApiModel, GeoApiService } from '../service/geo-api.service';
import { inject } from '@angular/core';

export const infoDeptResolver: ResolveFn<DepartementApiModel> = (route, state) => {
  return inject(GeoApiService).getDepartementByCode(route.params['code']);
};

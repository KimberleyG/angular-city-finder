import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/** interface représentant une région retournée par l'api https://geo.api.gouv.fr/ */
export interface RegionApiModel {
  code: string,
  nom: string;
}

/** interface représentant un département retourné par l'api https://geo.api.gouv.fr/ */
export interface DepartementApiModel {
  code: string,
  nom: string,
  codeRegion: string;
}

/** interface représentant une ville retournée par l'api https://geo.api.gouv.fr/ */
export interface VilleApiModel {
  code: string;
  nom: string;
  type: string;
  chefLieu: string;
  codeEpci: string;
  codeDepartement: string;
  codeRegion: string;
  population: number;
  _score: number;
}

/** Service permettant d'appeler l'API geo api */
@Injectable({
  providedIn: 'root'
})
export class GeoApiService {

  constructor(private http: HttpClient) { }

  /** permet de récuperer la liste des régions
   * @param value nom (ou début du nom) de la région
   * @returns liste des régions dont le nom commence par la valeur passée en paramètre
   */
  getRegionsByName(value: string): Observable<RegionApiModel[]> {
    return this.http.get<RegionApiModel[]>(`https://geo.api.gouv.fr/regions?nom=${value}`);
  }

  /** permet de récupérer la liste des départements d'une région
   * @param regionCode code de la région
   * @return liste des département de la région
   */
  getDepartementByRegionCode(regionCode: string): Observable<DepartementApiModel[]> {
    return this.http.get<DepartementApiModel[]>(`https://geo.api.gouv.fr/regions/${regionCode}/departements`);
  }

  /** permet de récuperer la liste des communes associées et déléguées d'un département 
   * @param deptCode code du département
   * @return liste des villes du département
   */
  getVilleListByDepartementCode(deptCode: string): Observable<VilleApiModel[]> {
    return this.http.get<VilleApiModel[]>(`https://geo.api.gouv.fr/departements/${deptCode}/communes`);
  }

}

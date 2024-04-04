import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, ReplaySubject, debounceTime, distinctUntilChanged, of, startWith, switchMap, takeUntil } from 'rxjs';
import { DepartementApiModel, GeoApiService, RegionApiModel } from '../service/geo-api.service';

/** page permettant de trouver une région par autocomplétion, et d'en afficher les départements  */
@Component({
  selector: 'app-departement-chooser-page',
  templateUrl: './departement-chooser-page.component.html',
  styleUrls: ['./departement-chooser-page.component.css']
})
export class DepartementChooserPageComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  regionInput = new FormControl('');
  filteredOptions: RegionApiModel[] = [];

  listeDepartements: DepartementApiModel[] = [];

  regionSelected!: RegionApiModel;

  constructor(private geoApiService: GeoApiService) { }

  ngOnInit() {
    this.regionInput.valueChanges.pipe(
      takeUntil(this.destroyed$),
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        return this.searchRegionByName(value || '');
      })
    ).subscribe({
      next: (result: RegionApiModel[]) => {
        this.filteredOptions = result;
      }
    });
  }

  searchRegionByName(value: string): Observable<RegionApiModel[]> {
    if (value && value?.trim().length > 0) {
      return this.geoApiService.getRegionsByName(value);
    } else {
      return of([]);
    }
  }

  onRegionSelected(valueSelected: RegionApiModel) {
    this.regionSelected = valueSelected;
    if (valueSelected.code) {
      this.geoApiService.getDepartementByRegionCode(valueSelected.code).subscribe(
        (result) => {
          this.listeDepartements = result;
        }
      );
    }
  }

  displayFn(value: RegionApiModel) {
    return value.nom;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}

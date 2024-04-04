import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementChooserPageComponent } from './departement-chooser-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeoApiService } from '../service/geo-api.service';
import { of } from 'rxjs';

describe('DepartementChooserPageComponent', () => {
  let component: DepartementChooserPageComponent;
  let fixture: ComponentFixture<DepartementChooserPageComponent>;
  let fakeGeoApiService: jasmine.SpyObj<GeoApiService>;

  beforeEach(async () => {

    const fakeGeoApiServiceSpy = jasmine.createSpyObj('GeoApiService', ['getRegionsByName', 'getDepartementByRegionCode']);

    TestBed.configureTestingModule({
      declarations: [DepartementChooserPageComponent],
      imports: [HttpClientModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule],
      providers: [
        {
          provide: HttpClient
        },
        {
          provide: GeoApiService,
          useValue: fakeGeoApiServiceSpy
        }
      ]
    }).compileComponents();

    fakeGeoApiService = TestBed.inject(GeoApiService) as jasmine.SpyObj<GeoApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementChooserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`doit faire la recherche lorsqu'on saisit une lettre dans le nom de la région`, () => {
    const mockData = [{
      "nom": "Normandie",
      "code": "28"
    }, {
      "nom": "Nouvelle-Aquitaine",
      "code": "75"
    },];
    fakeGeoApiService.getRegionsByName.and.returnValue(of(mockData));
    component.searchRegionByName('n').subscribe({
      next: (data) => {
        expect(data).toEqual([{
          "nom": "Normandie",
          "code": "28"
        }, {
          "nom": "Nouvelle-Aquitaine",
          "code": "75"
        },]);
      }
    });
  });

  it(`ne doit pas faire de recherche quand on ne saisit rien dans le nom de la région`, () => {
    const mockData = [{
      "nom": "Normandie",
      "code": "28"
    }, {
      "nom": "Nouvelle-Aquitaine",
      "code": "75"
    },];
    fakeGeoApiService.getRegionsByName.and.returnValue(of(mockData));
    component.searchRegionByName('').subscribe({
      next: (data) => {
        expect(data).toEqual([]);
      }
    });
  });

  it(`ne doit pas faire de recherche quand on saisit des espaces dans le nom de la région`, () => {
    const mockData = [{
      "nom": "Normandie",
      "code": "28"
    }, {
      "nom": "Nouvelle-Aquitaine",
      "code": "75"
    },];
    fakeGeoApiService.getRegionsByName.and.returnValue(of(mockData));
    component.searchRegionByName('  ').subscribe({
      next: (data) => {
        expect(data).toEqual([]);
      }
    });
  });

});

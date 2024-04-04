import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeVillesPageComponent } from './liste-villes-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListeVillesPageComponent', () => {
  let component: ListeVillesPageComponent;
  let fixture: ComponentFixture<ListeVillesPageComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ListeVillesPageComponent],
      imports: [BrowserAnimationsModule, MatTableModule, MatPaginatorModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              pageData: [{
                "nom": "Abbécourt",
                "code": "02001",
                "codeDepartement": "02",
                "siren": "210200010",
                "codeEpci": "200071785",
                "codeRegion": "32",
                "codesPostaux": [
                  "02300"
                ],
                "population": 507
              }]
            }),
          }
        }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVillesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

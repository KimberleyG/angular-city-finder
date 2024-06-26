import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartementApiModel, VilleApiModel } from '../service/geo-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

/** page permettant d'afficher les villes d'un département */
@Component({
  selector: 'liste-villes-page',
  templateUrl: './liste-villes-page.component.html',
  styleUrls: ['./liste-villes-page.component.css']
})
export class ListeVillesPageComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<VilleApiModel>([]);

  displayedColumns: string[] = ['nom', 'population'];

  infoDept!: DepartementApiModel;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((routeData) => {
      this.dataSource.data = routeData['listeVilles'];
      this.infoDept = routeData['infoDept'];
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

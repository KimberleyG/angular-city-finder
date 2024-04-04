import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VilleApiModel } from '../geo-api.service';
import { MatTableDataSource } from '@angular/material/table';

/** page permettant d'afficher les villes d'un département */
@Component({
  selector: 'liste-villes-page',
  templateUrl: './liste-villes-page.component.html',
  styleUrls: ['./liste-villes-page.component.css']
})
export class ListeVillesPageComponent implements OnInit {

  dataSource = new MatTableDataSource<VilleApiModel>([]);

  displayedColumns: string[] = ['nom', 'population'];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((routeData) => {
      this.dataSource.data = routeData['pageData'];
    });
  }

}

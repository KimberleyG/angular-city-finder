import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVillesPageComponent } from './liste-villes-page/liste-villes-page.component';
import { DepartementChooserPageComponent } from './departement-chooser-page/departement-chooser-page.component';
import { cityResolver } from './resolver/city.resolver';
import { infoDeptResolver } from './resolver/info-dept.resolver';

const routes: Routes = [
  { path: '', component: DepartementChooserPageComponent },
  {
    path: 'departement/:code', component: ListeVillesPageComponent, resolve: {
      listeVilles: cityResolver,
      infoDept: infoDeptResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

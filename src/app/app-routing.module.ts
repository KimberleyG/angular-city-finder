import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegionListComponent } from './region-list/region-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'region', component: RegionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

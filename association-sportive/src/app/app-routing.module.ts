import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssoSportiveComponent } from './asso-sportive.component';
import { DetailsGymnaseComponent } from './details-gymnase/details-gymnase.component';
import { GymnaseListComponent } from './gymnase-list/gymnase-list.component';

const routes: Routes = [
  {path: 'associationsportive', component: AssoSportiveComponent, children : [
    {path: 'gymnases', component: GymnaseListComponent },
    // c'est un segment de URL qui est dynamique, le :id,
    {path: 'gymnases/:id', component: DetailsGymnaseComponent },

  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes: any;
}

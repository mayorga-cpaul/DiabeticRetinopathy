import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorsListPage } from './doctors-list.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsListPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListResultsPage } from './list-results.page';

const routes: Routes = [
  {
    path: '',
    component: ListResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListResultsPageRoutingModule {}

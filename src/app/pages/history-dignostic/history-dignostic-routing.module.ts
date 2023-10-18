import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryDignosticPage } from './history-dignostic.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryDignosticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryDignosticPageRoutingModule {}

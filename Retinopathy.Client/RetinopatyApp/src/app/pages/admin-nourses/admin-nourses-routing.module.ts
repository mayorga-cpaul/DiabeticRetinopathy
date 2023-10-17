import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNoursesPage } from './admin-nourses.page';

const routes: Routes = [
  {
    path: '',
    component: AdminNoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminNoursesPageRoutingModule {}

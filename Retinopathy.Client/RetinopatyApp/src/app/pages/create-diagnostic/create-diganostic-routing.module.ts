import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDiagnosticPage } from './create-diagnostic.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDiagnosticPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

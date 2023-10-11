import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboarPageModule)
  },
  {
    path: 'create-analisis',
    loadChildren: () => import('./pages/create-diagnostic/create-diagnostic.module').then( m => m.CreateDiagnosticPageModule)
  },
  {
    path: 'history-dignostic',
    loadChildren: () => import('./pages/history-dignostic/history-dignostic.module').then( m => m.HistoryDignosticPageModule)
  },
  {
    path: 'platform-doctors',
    loadChildren: () => import('./pages/admin-doctors/admin-doctors.module').then( m => m.AdminDoctorsPageModule)
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

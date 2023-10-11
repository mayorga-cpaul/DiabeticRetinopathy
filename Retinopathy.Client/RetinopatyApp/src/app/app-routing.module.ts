import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'doctor-view',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list-results',
    loadChildren: () => import('./pages/list-results/list-results.module').then( m => m.ListResultsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'ControlDoctors',
    loadChildren: () => import('./pages/admin-doctors/admin-doctors.module').then( m => m.AdminDoctorsPageModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorPageModule)
  },
  {
    path: 'doctor-view',
    loadChildren: () => import('./pages/DoctorPages/doctor-view_historial/doctor-view.module').then( m => m.DoctorViewPageModule)
  },
  {
    path: 'admin-nourses',
    loadChildren: () => import('./pages/admin-nourses/admin-nourses.module').then( m => m.AdminNoursesPageModule)
  },
  {
    path: 'historialAnalisis',
    loadChildren: () => import('./pages/DoctorPages/doctor-view-historial-analisis/doctor-view-historial-analisis.module').then( m => m.DoctorViewHistorialAnalisisPageModule)
  },
  {
    path: 'detalleDiagnostico',
    loadChildren: () => import('./pages/DoctorPages/doctot-view-detalle-diagnostico/doctot-view-detalle-diagnostico.module').then( m => m.DoctotViewDetalleDiagnosticoPageModule )
  },
  {
    path: 'historialdiagnostico',
    loadChildren: () => import('./pages/DoctorPages/doctot-view-historial-diagnostico/doctot-view-historial-diagnostico.module').then( m => m.DoctotViewHistorialDiagnosticoPageModule )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

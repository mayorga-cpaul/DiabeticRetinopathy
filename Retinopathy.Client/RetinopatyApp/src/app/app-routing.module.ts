import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './guards/role.guard';

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
    canLoad:[RoleGuard],
    canActivate:[RoleGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboarPageModule)
  },
  {
    path: 'create-analisis',
    canLoad:[RoleGuard],
    canActivate:[RoleGuard],
    loadChildren: () => import('./pages/create-diagnostic/create-diagnostic.module').then( m => m.CreateDiagnosticPageModule)
  },
  {
    path: 'history-dignostic',
    canLoad:[RoleGuard],
    canActivate:[RoleGuard],
    loadChildren: () => import('./pages/history-dignostic/history-dignostic.module').then( m => m.HistoryDignosticPageModule)
  },
  {
    path: 'ControlDoctors',
  
    loadChildren: () => import('./pages/admin-doctors/admin-doctors.module').then( m => m.AdminDoctorsPageModule)
  },
  {
    path: 'doctor-view',
   
    loadChildren: () => import('./pages/doctor-pages/doctor-view_historial/doctor-view.module').then( m => m.DoctorViewPageModule)
  },
  {
    path: 'admin-nourses',
    loadChildren: () => import('./pages/admin-nourses/admin-nourses.module').then( m => m.AdminNoursesPageModule)
  },
  {
    path: 'historialAnalisis',
    loadChildren: () => import('./pages/doctor-pages/doctor-view-historial-analisis/doctor-view-historial-analisis.module').then(m => m.DoctorViewHistorialAnalisisPageModule)
  },
  {
    path: 'detalleDiagnostico',
    loadChildren: () => import('./pages/doctor-pages/doctot-view-detalle-diagnostico/doctot-view-detalle-diagnostico.module').then( m => m.DoctotViewDetalleDiagnosticoPageModule )
  },
  {
    path: 'diagnostico',
    loadChildren: () => import('./pages/doctor-pages/doctot-view-diagnostico/doctot-view-historial-diagnostico.module').then( m => m.DoctotViewHistorialDiagnosticoPageModule )
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

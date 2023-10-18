import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const RoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  console.log('en el guard');
  
  
  const result = authService.IsValid();

  if (result?.islogin) {
    console.log(result.islogin);
    
    return true;
  } else {
    console.log('retorno login');
    router.navigate(['/login'], { replaceUrl: true });
    
    
    return false;
  }
 

}

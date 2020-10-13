import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class GuardaRotas implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean/* | import("rxjs").Observable<boolean> | Promise<boolean> */ {
    if (!(sessionStorage.getItem("autenticado") == "1")) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
      return false;
    }
    return true;
  }

}

import { AutenticaUsersService } from './autentica-users.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardaRotas implements CanActivate{

  constructor(
    private router: Router,
    private auticando: AutenticaUsersService
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

  ): Observable<boolean> | boolean{

    if(this.auticando.usuarioEstaAutenticado()){
      return true;
    }
      this.router.navigate(['/login'])
      return false
  }

  
}

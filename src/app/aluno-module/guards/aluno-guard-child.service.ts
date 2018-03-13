import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AlunoGuardChildService implements CanActivateChild {

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | boolean {

   console.log('Aluno Guard-Child Service');   
   console.dir(route);   
   console.dir(state);   
   
    return true;

  }
  constructor() { }

}

import { Injectable } from '@angular/core';
import  { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import{ AuthenticacaoServiceService  } from '../login/authenticacao-service.service';
@Injectable()
export class AuthGuardService implements CanActivate{

  canActivate( route:ActivatedRouteSnapshot , state:RouterStateSnapshot )
        :Observable<boolean> | boolean{
            if (this.auth.getAutenticado())
            return true ;
            this.rout.navigate(['login']);

            return false;

  }
  constructor(private auth:AuthenticacaoServiceService , private rout:Router){

  }

}

import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlunoComponent } from '../aluno/aluno.component';
import { Observable } from 'rxjs/Observable';
import { AlunoInterace } from '../Interfaces/aluno-interace';
import { AlunoDetalheComponent } from '../aluno-detalhe/aluno-detalhe.component';

@Injectable()
export class AlunoGuardDeactiveService implements  CanDeactivate<AlunoInterace> {

  canDeactivate(
    component:AlunoInterace,
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
    ):Observable<boolean> | boolean
    {
      if (component instanceof AlunoComponent)
         console.log('Instancia de aluno componente ');   

         if (component instanceof AlunoDetalheComponent)
         console.log('Instancia de aluno detalhe ');   

      console.log('Aluno Desativando-Aluno  Service');   
      console.dir(route);   
      console.dir(state);

      return true;
    }
  constructor() { }

}

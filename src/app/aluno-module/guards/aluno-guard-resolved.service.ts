import { Injectable } from '@angular/core';
import { AlunoInterace } from '../Interfaces/aluno-interace';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlunoModel } from '../models/aluno-model';
import { AlunoServiceModelService } from '../aluno-service/aluno-service-model.service';

@Injectable()
export class AlunoGuardResolvedService implements Resolve<AlunoModel> {

  constructor(private serv:AlunoServiceModelService) { }

  resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):Observable<AlunoModel>|Promise<AlunoModel>|AlunoModel
  {
      let id = route.params['id'];
      let aluno  =  this.serv.GetAlunosById(id);
       return aluno;
  }

}

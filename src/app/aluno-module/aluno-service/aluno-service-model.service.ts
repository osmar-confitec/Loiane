import { Injectable } from '@angular/core';
import { AlunoModel } from '../models/aluno-model';

@Injectable()
export class AlunoServiceModelService {


    GetAlunos():Array<AlunoModel>{
      let alunoModel = new Array<AlunoModel>()
      alunoModel.push(new AlunoModel(10,"Everton","Figueira","Emerson@ig.com.br"));
      alunoModel.push(new AlunoModel(1210,"Osmar","Figueira","Osmar@ig.com.br"));
      alunoModel.push(new AlunoModel(1210,"Priscila","Figueira","Princila@ig.com.br"));
      return alunoModel;
    }

    GetAlunosById(id:number):AlunoModel{
      let alunoModel = new Array<AlunoModel>()
      alunoModel.push(new AlunoModel(10,"Everton","Figueira","Emerson@ig.com.br"));
      alunoModel.push(new AlunoModel(1,"Everton","Figueira","Emerson@ig.com.br"));
      alunoModel.push(new AlunoModel(1210,"Osmar","Figueira","Osmar@ig.com.br"));
      alunoModel.push(new AlunoModel(1210,"Priscila","Figueira","Princila@ig.com.br"));
      var consultaAluno = alunoModel.filter( function( elem, i, alunoModel ) {
        return elem.Id == id;
     } );
      return consultaAluno.length > 0 ? consultaAluno[0] : null;
    }

  constructor() { }

}

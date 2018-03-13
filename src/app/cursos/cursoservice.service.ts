import { Injectable } from '@angular/core';
import { CursoModule } from './cursosmodule';

@Injectable()
export class CursoserviceService {


  ObterCursoPorId(id:number):CursoModule{
    let lista: Array<CursoModule> = new Array();
    lista.push(new CursoModule('Portugues', 10));
    lista.push(new CursoModule('Matemática', 1024));
    let courseFind = lista.filter( function( elem, i, array ) {
         return elem.codigoCurso == id;
     } );     
      
     return courseFind.length > 0 ? courseFind[0] : null ;
  }

  ObterCursos(): Array<CursoModule> {
    let lista: Array<CursoModule> = new Array();
    lista.push(new CursoModule('Portugues', 10));
    lista.push(new CursoModule('Matemática', 1024));
    return lista;

  }

  constructor() { }

}

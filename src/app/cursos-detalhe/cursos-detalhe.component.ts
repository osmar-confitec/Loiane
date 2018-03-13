import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router  } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CursoserviceService } from '../cursos/cursoservice.service';
import { CursoModule } from '../cursos/cursosmodule';

@Component({
  selector: 'curso-loiane-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.css'],
  
  providers:[CursoserviceService]
})
export class CursosDetalheComponent implements OnInit {

  id:any;
  Inscricao:Subscription;
  cursomodulo: CursoModule;
  constructor(private routes:ActivatedRoute
            , private servicecurso:CursoserviceService
            , private routerCurse:Router) {

    var par =  this.routes.snapshot.params['id']
    console.log(par);

   }

   ngOnDestroy()
   {
    this.Inscricao.unsubscribe();

   }
  ngOnInit() {

      this.Inscricao =  this.routes.params.subscribe((params:any)=>{
      this.id = params['id'];
      this.cursomodulo  =  this.servicecurso.ObterCursoPorId(this.id); 
      if (this.cursomodulo == null)
      {
          this.routerCurse.navigate(['404Curse']);
      }

    })

  }

}

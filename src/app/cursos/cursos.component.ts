import { Component, OnInit } from '@angular/core';
import { CursoserviceService } from './cursoservice.service';
import { CursoModule } from './cursosmodule';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'curso-loiane-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers:[CursoserviceService]
})
export class CursosComponent implements OnInit {

  cursoslist: Array<CursoModule>;
  cursomodulo: CursoModule;
  paginaQuery:any;
  Inscricao:Subscription;

  constructor(private servicecurso:CursoserviceService, private rotaativa : ActivatedRoute) {

   }


   ngOnDestroy()
   {
    this.Inscricao.unsubscribe();

   }
  ngOnInit() {

    this.cursoslist = this.servicecurso.ObterCursos();
    this.Inscricao =  this.rotaativa.queryParams.subscribe((queryparam:any)=>{

        this.paginaQuery = queryparam['pagina'];

    });
    

    
  }

}

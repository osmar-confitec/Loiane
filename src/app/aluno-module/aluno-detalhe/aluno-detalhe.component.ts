import { Component, OnInit } from '@angular/core';
import { AlunoInterace } from '../Interfaces/aluno-interace';
import { ActivatedRoute } from '@angular/router'
import { AlunoServiceModelService } from '../aluno-service/aluno-service-model.service';
import { AlunoModel } from '../models/aluno-model';

@Component({
  selector: 'curso-loiane-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit , AlunoInterace {

  constructor(private route:ActivatedRoute, private alunoService:AlunoServiceModelService) { }

  ngOnInit() {

      this.route.data.subscribe((info:{aluno:AlunoModel})=>{

          console.log(info);

      });

  }

}

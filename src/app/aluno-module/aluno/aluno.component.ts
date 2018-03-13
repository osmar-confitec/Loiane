import { Component, OnInit } from '@angular/core';
import { AlunoInterace } from '../Interfaces/aluno-interace';

@Component({
  selector: 'curso-loiane-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit , AlunoInterace {

  constructor() { }

  ngOnInit() {
  }

}

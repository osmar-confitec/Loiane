import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'curso-loiane-alfabeto',
  templateUrl: './alfabeto.component.html',
  styleUrls: ['./alfabeto.component.css']
})
export class AlfabetoComponent implements OnInit {


  Alfabeto:string[] = ['A','B','C','D','E','F','G','H'];
  letraSelecionada:string = '' 

  constructor() { }

  EnviarNotificacao(){


  }

  ngOnInit() {
  }

}

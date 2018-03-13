import { Component } from '@angular/core';
import{ AuthenticacaoServiceService } from './login/authenticacao-service.service';
@Component({
  selector: 'curso-loiane-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'curso-loiane';

  mostrarMenu:boolean = false;

  constructor(private auth:AuthenticacaoServiceService){

  }

  ngOnInit(){
    this.auth.mostrarMenuEmitter.subscribe(mostrar =>
      
      { 
        
        this.mostrarMenu = mostrar ; 
      
      }  
     );

  }

}

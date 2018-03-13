import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticacaoServiceService } from './authenticacao-service.service';
import { Usuario } from './usuario';
@Component({
  selector: 'curso-loiane-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;
 

  constructor(private router:Router  ,  private auth:AuthenticacaoServiceService) {

    this.usuario = new Usuario();
   }

  ngOnInit() {

    this.auth.mostrarMenuEmitter.emit(false);
    
  }

  fazerLogin(){

  let usuario = this.usuario.user;
  let senhauser =  this.usuario.senha; 
  if( this.auth.Autenticar(usuario ,senhauser ))
  {

    this.router.navigate(['/']);
   
  }
 else 
    {
       alert('Atenção! usuário ou senha incorretos!!');   
      
    }
       


  }

}

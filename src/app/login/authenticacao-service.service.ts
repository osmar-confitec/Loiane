import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthenticacaoServiceService {

  autUser:boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  constructor() { }

  Autenticar(usuario:string , senha:string):boolean{
      this.autUser = (usuario === 'osmar' && senha === '123456os');

      this.mostrarMenuEmitter.emit( this.autUser);
      return this.autUser;
  }

  getAutenticado(){
    return this.autUser;
  }

}

import { Routes, RouterModule  } from '@angular/router';
import  { HomeComponent }  from './home/home.component';
import  { LoginComponent }  from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { EnderecosComponent } from './shared/enderecos/enderecos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component'
import { ModuleWithProviders } from '@angular/core';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component'
import { AuthGuardService } from './guards/auth-guard.service';
import { ViewchildComponent } from './viewchild/viewchild.component';
const APP_ROUTES : Routes = [
        { path :'viewchild'  , component:ViewchildComponent },
        { path :'404Curse'  , component:CursoNaoEncontradoComponent
         },

        { path :'login'  , component:LoginComponent },
        { path :''  , component:HomeComponent , canActivate:[AuthGuardService] },
        { path :'endereco'  ,  component:EnderecosComponent , canActivate:[AuthGuardService] },
        { path : 'cursos' , component: CursosComponent , canActivate:[AuthGuardService] },
        { path : 'cursos/:id' , component: CursosDetalheComponent , canActivate:[AuthGuardService] },
        {path:'**'  , component:CursoNaoEncontradoComponent }
]; 
export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

//, canActivate:[AuthGuardService]
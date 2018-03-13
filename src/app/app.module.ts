import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthenticacaoServiceService } from './login/authenticacao-service.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { AlunoModuleModule } from './aluno-module/aluno-module.module';
import { ViewchildComponent } from './viewchild/viewchild.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursosDetalheComponent,
    CursoNaoEncontradoComponent,
    ViewchildComponent
  ],
  imports: [
    BrowserModule,
    AlunoModuleModule,
    SharedModule,
    routing,
    FormsModule
  ],
  providers:[AuthenticacaoServiceService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

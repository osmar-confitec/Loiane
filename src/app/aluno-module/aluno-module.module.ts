import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoRoutingModule } from './aluno.routing.module';
import { AlunoGuardService } from './guards/aluno-guard.service';
import { AlunoGuardChildService } from './guards/aluno-guard-child.service';
import { AlunoGuardDeactiveService } from './guards/aluno-guard-deactive.service';
import { AlunoServiceModelService } from './aluno-service/aluno-service-model.service';
import { AlunoGuardResolvedService } from './guards/aluno-guard-resolved.service';
import { AlfabetoComponent } from './alfabeto/alfabeto.component';

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  declarations: [AlunoComponent, AlunoFormComponent, AlunoDetalheComponent, AlfabetoComponent],
  exports:[AlunoComponent, AlunoFormComponent, AlunoDetalheComponent],
  providers:[AlunoGuardService
    ,AlunoGuardResolvedService
    ,AlunoGuardChildService
    ,AlunoGuardDeactiveService
    ,AlunoServiceModelService]
})
export class AlunoModuleModule { }

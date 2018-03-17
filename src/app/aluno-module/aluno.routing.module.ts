import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoGuardService } from './guards/aluno-guard.service';
import { AlunoGuardChildService } from './guards/aluno-guard-child.service';
import { AlunoGuardDeactiveService } from './guards/aluno-guard-deactive.service';
import { AlunoGuardResolvedService } from './guards/aluno-guard-resolved.service';

const alunosRoutes = [

        {path:'' , component:AlunoComponent,
         canActivate:[AlunoGuardService],
         canDeactivate:[AlunoGuardDeactiveService],
         canActivateChild:[AlunoGuardChildService],
        children:[
        {path:'novo' , component:AlunoFormComponent},
        {path:':id' , component:AlunoDetalheComponent,
            resolve:{aluno:AlunoGuardResolvedService}
            
        },
        {path:':id/editar' , component:AlunoFormComponent}
    ]}
   
];
@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})

export class AlunoRoutingModule{

    
}
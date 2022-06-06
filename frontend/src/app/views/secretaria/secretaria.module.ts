import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlunoComponent } from './../../components/aluno/aluno.component';
import { ButtomComponent } from './../../components/botoes/buttom/buttom.component';
import { CardIconeComponent } from './../../components/cards/card-icone/card-icone.component';
import { CardMenuComponent } from './../../components/cards/card-menu/card-menu.component';
import { DialogConfirmComponent } from './../../components/dialog-confirm/dialog-confirm.component';
import { FuncionarioComponent } from './../../components/funcionario/funcionario.component';
import { IconeDeleteComponent } from './../../components/icones/icone-delete/icone-delete.component';
import { IconeEditComponent } from './../../components/icones/icone-edit/icone-edit.component';
import { IconeVisualizarComponent } from './../../components/icones/icone-visualizar/icone-visualizar.component';
import { HeaderComponent } from './../../components/templates/header/header.component';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { AlunosComponent } from './alunos/alunos.component';
import { BuscarAlunosComponent } from './alunos/buscar-alunos/buscar-alunos.component';
import { CreateAlunosComponent } from './alunos/create-alunos/create-alunos.component';
import { ListaAlunosComponent } from './alunos/lista-alunos/lista-alunos.component';
import { ReadAlunoComponent } from './alunos/read-aluno/read-aluno.component';
import { UpdateAlunosComponent } from './alunos/update-alunos/update-alunos.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { PeriodoLetivoComponent } from './periodo-letivo/periodo-letivo.component';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';
import { TurmasComponent } from './turmas/turmas.component';



@NgModule({
  declarations: [
    SecretariaComponent,
    
    CardMenuComponent,
    
    AlunosComponent,
    
    CardIconeComponent,
    BuscarAlunosComponent,
    ListaAlunosComponent,
    IconeEditComponent,
    IconeDeleteComponent,
    IconeVisualizarComponent,
    ButtomComponent,
    CreateAlunosComponent,
    UpdateAlunosComponent,
    DialogConfirmComponent,
    ReadAlunoComponent,
    AlunoComponent,
    
    FuncionarioComponent,
    TurmasComponent,
    MatriculaComponent,
    PeriodoLetivoComponent,
    HeaderComponent
    
    
  ],
  imports: [
    CommonModule,
    SecretariaRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    
    CardMenuComponent,
    
    
    IconeEditComponent,
    IconeDeleteComponent,
    IconeVisualizarComponent,
    ButtomComponent,
    DialogConfirmComponent,
    AlunoComponent,
    FuncionarioComponent,
    HeaderComponent
    
  ]
})
export class SecretariaModule { }

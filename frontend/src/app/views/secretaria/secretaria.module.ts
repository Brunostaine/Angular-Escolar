import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlunoComponent } from './../../components/aluno/aluno.component';
import { ButtomComponent } from './../../components/botoes/buttom/buttom.component';
import { CardIconeComponent } from './../../components/cards/card-icone/card-icone.component';
import { CardMenuComponent } from './../../components/cards/card-menu/card-menu.component';
import { DialogConfirmComponent } from './../../components/dialog-confirm/dialog-confirm.component';
import { FuncionarioComponent } from './../../components/funcionario/funcionario.component';
import { HeaderPagesComponent } from './../../components/header-pages/header-pages.component';
import { IconeDeleteComponent } from './../../components/icones/icone-delete/icone-delete.component';
import { IconeEditComponent } from './../../components/icones/icone-edit/icone-edit.component';
import { IconeVisualizarComponent } from './../../components/icones/icone-visualizar/icone-visualizar.component';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { AlunosComponent } from './alunos/alunos.component';
import { BuscarAlunosComponent } from './alunos/buscar-alunos/buscar-alunos.component';
import { CreateAlunosComponent } from './alunos/create-alunos/create-alunos.component';
import { ListaAlunosComponent } from './alunos/lista-alunos/lista-alunos.component';
import { ReadAlunoComponent } from './alunos/read-aluno/read-aluno.component';
import { UpdateAlunosComponent } from './alunos/update-alunos/update-alunos.component';
import { CreateFuncionariosComponent } from './funcionarios/create-funcionarios/create-funcionarios.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ListaFuncionariosComponent } from './funcionarios/lista-funcionarios/lista-funcionarios.component';
import { ReadFuncionariosComponent } from './funcionarios/read-funcionarios/read-funcionarios.component';
import { UpdateFuncionariosComponent } from './funcionarios/update-funcionarios/update-funcionarios.component';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';
import { TurmasComponent } from './turmas/turmas.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { PeriodoLetivoComponent } from './periodo-letivo/periodo-letivo.component';



@NgModule({
  declarations: [
    SecretariaComponent,
    
    CardMenuComponent,
    HeaderPagesComponent,
    AlunosComponent,
    FuncionariosComponent,
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
    CreateFuncionariosComponent,
    ListaFuncionariosComponent,
    UpdateFuncionariosComponent,
    ReadFuncionariosComponent,
    FuncionarioComponent,
    TurmasComponent,
    MatriculaComponent,
    PeriodoLetivoComponent,
    
    
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
    HeaderPagesComponent,
    
    IconeEditComponent,
    IconeDeleteComponent,
    IconeVisualizarComponent,
    ButtomComponent,
    DialogConfirmComponent,
    AlunoComponent,
    FuncionarioComponent,
    
  ]
})
export class SecretariaModule { }

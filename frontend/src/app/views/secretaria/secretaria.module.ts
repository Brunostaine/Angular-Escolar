import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtomComponent } from './../../components/botoes/buttom/buttom.component';
import { CardIconeComponent } from './../../components/cards/card-icone/card-icone.component';
import { CardMenuComponent } from './../../components/cards/card-menu/card-menu.component';
import { DialogConfirmComponent } from './../../components/dialog-confirm/dialog-confirm.component';
import { HeaderPagesComponent } from './../../components/header-pages/header-pages.component';
import { IconeDeleteComponent } from './../../components/icones/icone-delete/icone-delete.component';
import { IconeEditComponent } from './../../components/icones/icone-edit/icone-edit.component';
import { IconeVisualizarComponent } from './../../components/icones/icone-visualizar/icone-visualizar.component';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { AlunosComponent } from './alunos/alunos.component';
import { BuscarAlunosComponent } from './alunos/buscar-alunos/buscar-alunos.component';
import { CreateAlunosComponent } from './alunos/create-alunos/create-alunos.component';
import { ListaAlunosComponent } from './alunos/lista-alunos/lista-alunos.component';
import { UpdateAlunosComponent } from './alunos/update-alunos/update-alunos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';
import { ReadAlunoComponent } from './alunos/read-aluno/read-aluno.component';



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
    
  ],
  imports: [
    CommonModule,
    SecretariaRoutingModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    
    CardMenuComponent,
    HeaderPagesComponent,
    
    IconeEditComponent,
    IconeDeleteComponent,
    IconeVisualizarComponent,
    ButtomComponent,
    DialogConfirmComponent,
    
    
  ]
})
export class SecretariaModule { }

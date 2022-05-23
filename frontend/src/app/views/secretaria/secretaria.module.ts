import { ButtomComponent } from './../../components/botoes/buttom/buttom.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CardIconeComponent } from './../../components/cards/card-icone/card-icone.component';
import { CardMenuComponent } from './../../components/cards/card-menu/card-menu.component';
import { HeaderPagesComponent } from './../../components/header-pages/header-pages.component';
import { IconeDeleteComponent } from './../../components/icones/icone-delete/icone-delete.component';
import { IconeEditComponent } from './../../components/icones/icone-edit/icone-edit.component';
import { IconeVisualizarComponent } from './../../components/icones/icone-visualizar/icone-visualizar.component';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { AlunosComponent } from './alunos/alunos.component';
import { BuscarAlunosComponent } from './alunos/buscar-alunos/buscar-alunos.component';
import { ListaAlunosComponent } from './alunos/lista-alunos/lista-alunos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';


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
    ButtomComponent
  ],
  imports: [
    CommonModule,
    SecretariaRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    
    CardMenuComponent,
    HeaderPagesComponent,
    
    IconeEditComponent,
    IconeDeleteComponent,
    IconeVisualizarComponent,
    ButtomComponent
    
  ]
})
export class SecretariaModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BotaoAdicionarComponent } from './../../components/botoes/botao-adicionar/botao-adicionar.component';
import { CardIconeComponent } from './../../components/cards/card-icone/card-icone.component';
import { CardMenuComponent } from './../../components/cards/card-menu/card-menu.component';
import { HeaderPagesComponent } from './../../components/header-pages/header-pages.component';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { AlunosComponent } from './alunos/alunos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';
import { BuscarAlunosComponent } from './alunos/buscar-alunos/buscar-alunos.component';
import { ListaAlunosComponent } from './alunos/lista-alunos/lista-alunos.component';


@NgModule({
  declarations: [
    SecretariaComponent,
    BotaoAdicionarComponent,
    CardMenuComponent,
    HeaderPagesComponent,
    AlunosComponent,
    FuncionariosComponent,
    CardIconeComponent,
    BuscarAlunosComponent,
    ListaAlunosComponent
  ],
  imports: [
    CommonModule,
    SecretariaRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    BotaoAdicionarComponent,
    CardMenuComponent,
    HeaderPagesComponent
    
  ]
})
export class SecretariaModule { }

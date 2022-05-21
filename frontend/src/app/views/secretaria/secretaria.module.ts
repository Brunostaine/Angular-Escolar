import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BotaoAdicionarComponent } from './../../components/botoes/botao-adicionar/botao-adicionar.component';
import { CardMenuComponent } from './../../components/cards/card-menu/card-menu.component';
import { HeaderPagesComponent } from './../../components/header-pages/header-pages.component';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';


@NgModule({
  declarations: [
    SecretariaComponent,
    BotaoAdicionarComponent,
    CardMenuComponent,
    HeaderPagesComponent
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

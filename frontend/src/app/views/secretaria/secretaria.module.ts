import { CardMenuComponent } from './../../components/cards/card-menu/card-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BotaoAdicionarComponent } from './../../components/botoes/botao-adicionar/botao-adicionar.component';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';


@NgModule({
  declarations: [
    SecretariaComponent,
    BotaoAdicionarComponent,
    CardMenuComponent
  ],
  imports: [
    CommonModule,
    SecretariaRoutingModule
  ],
  exports: [
    BotaoAdicionarComponent,
    CardMenuComponent
  ]
})
export class SecretariaModule { }

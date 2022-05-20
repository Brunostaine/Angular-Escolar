import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BotaoAdicionarComponent } from './../../components/botoes/botao-adicionar/botao-adicionar.component';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';


@NgModule({
  declarations: [
    SecretariaComponent,
    BotaoAdicionarComponent
  ],
  imports: [
    CommonModule,
    SecretariaRoutingModule
  ],
  exports: [
    BotaoAdicionarComponent
  ]
})
export class SecretariaModule { }

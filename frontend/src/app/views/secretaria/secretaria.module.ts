import { BotaoAdicionarComponent } from './../../components/botoes/botao-adicionar/botao-adicionar.component';
import { SecretariaComponent } from './secretaria.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariaRoutingModule } from './secretaria-routing.module';


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

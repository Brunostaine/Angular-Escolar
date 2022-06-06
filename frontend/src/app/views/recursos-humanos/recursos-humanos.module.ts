import { RecursosHumanosComponent } from './recursos-humanos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosHumanosRoutingModule } from './recursos-humanos-routing.module';


@NgModule({
  declarations: [
      RecursosHumanosComponent
  ],
  imports: [
    CommonModule,
    RecursosHumanosRoutingModule
  ],
  exports: [RecursosHumanosComponent]
})
export class RecursosHumanosModule { }

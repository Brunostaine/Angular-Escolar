import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatriculaComponent } from './matricula/matricula.component';
import { SecretariaComponent } from './secretaria.component';

const routes: Routes = [
  { path: 'secretaria', component: SecretariaComponent },
  { path: 'matricula', component: MatriculaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretariaRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos/alunos.component';
import { CreateAlunosComponent } from './alunos/create-alunos/create-alunos.component';
import { UpdateAlunosComponent } from './alunos/update-alunos/update-alunos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { SecretariaComponent } from './secretaria.component';

const routes: Routes = [
  { path: 'secretaria', component: SecretariaComponent },
  { path: 'secretaria/alunos', component: AlunosComponent },
  { path: 'secretaria/funcionarios', component: FuncionariosComponent },
  { path: 'secretaria/alunos/create', component: CreateAlunosComponent },
  { path: 'secretaria/alunos/update/:id', component: UpdateAlunosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretariaRoutingModule { }

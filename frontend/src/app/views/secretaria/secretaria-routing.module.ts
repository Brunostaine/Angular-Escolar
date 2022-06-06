import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos/alunos.component';
import { CreateAlunosComponent } from './alunos/create-alunos/create-alunos.component';
import { ReadAlunoComponent } from './alunos/read-aluno/read-aluno.component';
import { UpdateAlunosComponent } from './alunos/update-alunos/update-alunos.component';
import { SecretariaComponent } from './secretaria.component';

const routes: Routes = [
  { path: 'secretaria', component: SecretariaComponent },
  { path: 'secretaria/alunos', component: AlunosComponent },
  { path: 'secretaria/alunos/create', component: CreateAlunosComponent },
  { path: 'secretaria/alunos/update/:id', component: UpdateAlunosComponent },
  { path: 'secretaria/alunos/aluno/:id', component: ReadAlunoComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretariaRoutingModule { }

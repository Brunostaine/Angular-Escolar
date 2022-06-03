import { ReadFuncionariosComponent } from './funcionarios/read-funcionarios/read-funcionarios.component';
import { UpdateFuncionariosComponent } from './funcionarios/update-funcionarios/update-funcionarios.component';
import { CreateFuncionariosComponent } from './funcionarios/create-funcionarios/create-funcionarios.component';
import { ReadAlunoComponent } from './alunos/read-aluno/read-aluno.component';
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
  { path: 'secretaria/alunos/create', component: CreateAlunosComponent },
  { path: 'secretaria/alunos/update/:id', component: UpdateAlunosComponent },
  { path: 'secretaria/alunos/aluno/:id', component: ReadAlunoComponent },
  
  { path: 'secretaria/funcionarios', component: FuncionariosComponent },
  { path: 'secretaria/funcionarios', component: FuncionariosComponent },
  { path: 'secretaria/funcionarios/create', component: CreateFuncionariosComponent },
  { path: 'secretaria/funcionarios/update/:id', component: UpdateFuncionariosComponent },
  { path: 'secretaria/funcionarios/funcionario/:id', component: ReadFuncionariosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretariaRoutingModule { }

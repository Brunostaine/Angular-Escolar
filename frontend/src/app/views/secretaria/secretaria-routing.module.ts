import { AlunoUpdateComponent } from './alunos/aluno-update/aluno-update.component';
import { AlunoComponent } from './../../components/aluno/aluno.component';
import { AlunosComponent } from './alunos/alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatriculaComponent } from './matricula/matricula.component';
import { SecretariaComponent } from './secretaria.component';

const routes: Routes = [
  { path: 'secretaria', component: SecretariaComponent },
  { path: 'secretaria/alunos', component: AlunosComponent },
  { path: 'secretaria/alunos/matricula', component: MatriculaComponent },
  { path: 'secretaria/alunos/:id', component: AlunoComponent },
  { path: 'secretaria/alunos/update/:id', component: AlunoUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretariaRoutingModule { }
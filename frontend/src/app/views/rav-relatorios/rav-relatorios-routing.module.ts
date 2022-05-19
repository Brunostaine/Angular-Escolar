import { CreateRelatoriosComponent } from './relatorios/create-relatorios/create-relatorios.component';
import { ListRelatoriosComponent } from './relatorios/list-relatorios/list-relatorios.component';
import { UpdateAlunosComponent } from './alunos/update-alunos/update-alunos.component';
import { CreateAlunosComponent } from './alunos/create-alunos/create-alunos.component';
import { ListAlunosComponent } from './alunos/list-alunos/list-alunos.component';
import { RavRelatoriosComponent } from './rav-relatorios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'rav', component: RavRelatoriosComponent },
  { path: 'rav/alunos', component: ListAlunosComponent },
  { path: 'rav/aluno/create', component: CreateAlunosComponent },
  { path: 'rav/aluno/update/:id', component: UpdateAlunosComponent },

  { path: 'rav/relatorio', component: ListRelatoriosComponent },
  { path: 'rav/relatorio/create', component: CreateRelatoriosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RavRelatoriosRoutingModule { }

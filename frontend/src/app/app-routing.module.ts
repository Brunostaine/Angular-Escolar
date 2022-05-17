import { CreateRelatoriosComponent } from './views/rav-relatorios/relatorios/create-relatorios/create-relatorios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarioEscolarComponent } from './views/calendario-escolar/calendario-escolar/calendario-escolar.component';
import { DiarioComponent } from './views/diario/diario/diario.component';
import { Turma1AComponent } from './views/diario/turmas/turma1-a/turma1-a.component';
import { Turma1BComponent } from './views/diario/turmas/turma1-b/turma1-b.component';
import { HomeComponent } from './views/home/home.component';
import { CreateAlunosComponent } from './views/rav-relatorios/alunos/create-alunos/create-alunos.component';
import { ListAlunosComponent } from './views/rav-relatorios/alunos/list-alunos/list-alunos.component';
import { UpdateAlunosComponent } from './views/rav-relatorios/alunos/update-alunos/update-alunos.component';
import { RavRelatoriosComponent } from './views/rav-relatorios/rav-relatorios.component';
import { ListRelatoriosComponent } from './views/rav-relatorios/relatorios/list-relatorios/list-relatorios.component';
import { RegimentoEscolarComponent } from './views/regimento-escolar/regimento-escolar/regimento-escolar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rav', component: RavRelatoriosComponent },
  { path: 'rav/alunos', component: ListAlunosComponent },
  { path: 'rav/aluno/create', component: CreateAlunosComponent },
  { path: 'rav/aluno/update/:id', component: UpdateAlunosComponent },

  { path: 'rav/relatorio', component: ListRelatoriosComponent },
  { path: 'rav/relatorio/create', component: CreateRelatoriosComponent },

  { path: 'diario', component: DiarioComponent },
  { path: 'turma-1A', component: Turma1AComponent },
  { path: 'turma-1B', component: Turma1BComponent },
  { path: 'calendario-escolar', component: CalendarioEscolarComponent },
  { path: 'regimento-escolar', component: RegimentoEscolarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

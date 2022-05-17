import { CreateAlunosComponent } from './views/rav-relatorios/alunos/create-alunos/create-alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { RavRelatoriosComponent } from './views/rav-relatorios/rav-relatorios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rav', component: RavRelatoriosComponent },
  { path: 'rav/aluno/create', component: CreateAlunosComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

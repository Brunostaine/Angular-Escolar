import { RhComponent } from './views/recursos-humanos/rh/rh.component';
import { RegimentoEscolarComponent } from './views/regimento-escolar/regimento-escolar.component';
import { CalendarioEscolarComponent } from './views/calendario-escolar/calendario-escolar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendario-escolar', component: CalendarioEscolarComponent },
  { path: 'regimento-escolar', component: RegimentoEscolarComponent },
  { path: 'rh', component: RhComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

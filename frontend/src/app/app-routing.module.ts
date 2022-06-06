import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarioEscolarComponent } from './views/calendario-escolar/calendario-escolar.component';
import { HomeComponent } from './views/home/home.component';
import { RegimentoEscolarComponent } from './views/regimento-escolar/regimento-escolar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendario-escolar', component: CalendarioEscolarComponent },
  { path: 'regimento-escolar', component: RegimentoEscolarComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

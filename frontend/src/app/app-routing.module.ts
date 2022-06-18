import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/templates/login/login.component';
import { CalendarioEscolarComponent } from './views/calendario-escolar/calendario-escolar.component';
import { HomeComponent } from './views/home/home.component';
import { RegimentoEscolarComponent } from './views/regimento-escolar/regimento-escolar.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'calendario-escolar', component: CalendarioEscolarComponent },
    { path: 'regimento-escolar', component: RegimentoEscolarComponent },
    
    { path: 'login', component: LoginComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

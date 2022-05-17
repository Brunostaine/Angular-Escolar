import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CreateAlunosComponent } from './views/rav-relatorios/alunos/create-alunos/create-alunos.component';
import { ListAlunosComponent } from './views/rav-relatorios/alunos/list-alunos/list-alunos.component';
import { RavRelatoriosComponent } from './views/rav-relatorios/rav-relatorios.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RavRelatoriosComponent,
    CreateAlunosComponent,
    ListAlunosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    MatSnackBarModule,

    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

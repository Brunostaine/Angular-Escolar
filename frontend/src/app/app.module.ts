import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDiarioTitleComponent } from './components/templates/cards/card-diario-title/card-diario-title.component';
import { CardTitlePagesComponent } from './components/templates/cards/card-title-pages/card-title-pages.component';
import {
  MatCartRavRelatoriosComponent,
} from './components/templates/cards/mat-cart-rav-relatorios/mat-cart-rav-relatorios.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { NavComponent } from './components/templates/nav/nav.component';
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
import { CreateRelatoriosComponent } from './views/rav-relatorios/relatorios/create-relatorios/create-relatorios.component';
import { BotaoAdicionarComponent } from './components/botoes/botao-adicionar/botao-adicionar.component';
import { IconeEditComponent } from './components/icones/icone-edit/icone-edit.component';
import { IconeDeleteComponent } from './components/icones/icone-delete/icone-delete.component';
import { BotaoCancelarComponent } from './components/botoes/botao-cancelar/botao-cancelar.component';




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
    MatCartRavRelatoriosComponent,
    CardTitlePagesComponent,
    UpdateAlunosComponent,
    DiarioComponent,
    CardDiarioTitleComponent,
    CalendarioEscolarComponent,
    RegimentoEscolarComponent,
    Turma1AComponent,
    Turma1BComponent,
    
    ListRelatoriosComponent,
          CreateRelatoriosComponent,
          BotaoAdicionarComponent,
          IconeEditComponent,
          IconeDeleteComponent,
          BotaoCancelarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

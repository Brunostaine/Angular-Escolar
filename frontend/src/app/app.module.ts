import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoAdicionarComponent } from './components/botoes/botao-adicionar/botao-adicionar.component';
import { BotaoCancelarComponent } from './components/botoes/botao-cancelar/botao-cancelar.component';
import { IconeDeleteComponent } from './components/icones/icone-delete/icone-delete.component';
import { IconeEditComponent } from './components/icones/icone-edit/icone-edit.component';
import { CardDiarioTitleComponent } from './components/templates/cards/card-diario-title/card-diario-title.component';
import { CardTitlePagesComponent } from './components/templates/cards/card-title-pages/card-title-pages.component';
import {
  MatCartRavRelatoriosComponent,
} from './components/templates/cards/mat-cart-rav-relatorios/mat-cart-rav-relatorios.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { CalendarioEscolarComponent } from './views/calendario-escolar/calendario-escolar.component';
import { HomeComponent } from './views/home/home.component';
import { CreateAlunosComponent } from './views/rav-relatorios/alunos/create-alunos/create-alunos.component';
import { ListAlunosComponent } from './views/rav-relatorios/alunos/list-alunos/list-alunos.component';
import { UpdateAlunosComponent } from './views/rav-relatorios/alunos/update-alunos/update-alunos.component';
import { RavRelatoriosComponent } from './views/rav-relatorios/rav-relatorios.component';
import { RavRelatoriosModule } from './views/rav-relatorios/rav-relatorios.module';
import { CreateRelatoriosComponent } from './views/rav-relatorios/relatorios/create-relatorios/create-relatorios.component';
import { ListRelatoriosComponent } from './views/rav-relatorios/relatorios/list-relatorios/list-relatorios.component';
import { RegimentoEscolarComponent } from './views/regimento-escolar/regimento-escolar.component';
import { SecretariaModule } from './views/secretaria/secretaria.module';




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

    CardDiarioTitleComponent,
    CalendarioEscolarComponent,
    RegimentoEscolarComponent,

    
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
    SecretariaModule,
    
    AngularMaterialModule,
    RavRelatoriosModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

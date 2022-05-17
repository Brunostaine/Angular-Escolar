import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatCartRavRelatoriosComponent } from './components/templates/cards/mat-cart-rav-relatorios/mat-cart-rav-relatorios.component';
import { CardTitlePagesComponent } from './components/templates/cards/card-title-pages/card-title-pages.component';
import {MatButtonModule} from '@angular/material/button';
import { UpdateAlunosComponent } from './views/rav-relatorios/alunos/update-alunos/update-alunos.component';



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
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

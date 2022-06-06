import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { HomeComponent } from './views/home/home.component';
import { ColaboradoresComponent } from './views/recursos-humanos/colaboradores/colaboradores.component';
import { RhComponent } from './views/recursos-humanos/rh.component';
import { SecretariaModule } from './views/secretaria/secretaria.module';


@NgModule({
  declarations: [
    AppComponent,
    
    NavComponent,
    HomeComponent,
    FooterComponent,
    
    ColaboradoresComponent,
    RhComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SecretariaModule,
    
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

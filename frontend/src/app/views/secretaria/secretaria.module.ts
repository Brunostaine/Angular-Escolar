import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AlunoComponent } from './../../components/aluno/aluno.component';
import { ButtomComponent } from './../../components/botoes/buttom/buttom.component';
import { CardIconeComponent } from './../../components/cards/card-icone/card-icone.component';
import { CardMenuComponent } from './../../components/cards/card-menu/card-menu.component';
import { DialogConfirmComponent } from './../../components/dialog-confirm/dialog-confirm.component';
import { IconeDeleteComponent } from './../../components/icones/icone-delete/icone-delete.component';
import { IconeEditComponent } from './../../components/icones/icone-edit/icone-edit.component';
import { IconeVisualizarComponent } from './../../components/icones/icone-visualizar/icone-visualizar.component';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { MatriculaComponent } from './matricula/matricula.component';
import { PeriodoLetivoComponent } from './periodo-letivo/periodo-letivo.component';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';
import { TurmasComponent } from './turmas/turmas.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoUpdateComponent } from './alunos/aluno-update/aluno-update.component';



@NgModule({
    declarations: [
        SecretariaComponent,
        MatriculaComponent,
        PeriodoLetivoComponent,
        TurmasComponent,

        CardMenuComponent,
        CardIconeComponent,

        IconeEditComponent,
        IconeDeleteComponent,
        IconeVisualizarComponent,
        ButtomComponent,
        AlunoComponent,
        DialogConfirmComponent,
        AlunosComponent,
        AlunoUpdateComponent,

    ],
    imports: [
        CommonModule,
        SecretariaRoutingModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        CardMenuComponent,
        IconeEditComponent,
        IconeDeleteComponent,
        IconeVisualizarComponent,
        ButtomComponent,
        DialogConfirmComponent,
        AlunoComponent,
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    ]
})
export class SecretariaModule { }

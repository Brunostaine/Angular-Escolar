import { Turma } from './../../../models/turma-model';
import { Router } from '@angular/router';
import { TurmasService } from './../../../services/turmas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

    btnSalvar: string = 'Salvar'
    bgSalvar: string = 'salvar'
    btnCancelar: string = 'Cancelar'
    bgCancelar: string = 'cancelar'

    turma: Turma = {
        name: ''
    }

  constructor(
      private turmasService: TurmasService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  save(): void {
      if(this.turma.name !== ''){
        this.turmasService.create(this.turma).subscribe(
            (result) => {
                this.turma = result;
                this.turmasService.showMessage('Nova turma inserida com sucesso')
            })
      } else {
        this.turmasService.showMessage('Preencha os campos')
      }  
  }

  cancel(): void {
    this.router.navigate(['/secretaria'])
  }

}

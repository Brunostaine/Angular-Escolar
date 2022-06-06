import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AlunosService } from '../../../../services/alunos.service';

@Component({
  selector: 'app-buscar-alunos',
  templateUrl: './buscar-alunos.component.html',
  styleUrls: ['./buscar-alunos.component.css']
})
export class BuscarAlunosComponent implements OnInit {

  buscar: string = 'Buscar'
  background: string = 'buscar'

  limpar: string = 'Limpar'
  backgroundLimpar: string = 'limpar'

  queryField = new FormControl

  constructor(private AlunosService: AlunosService) { }

  ngOnInit(): void {
  }

  onBuscar(){
    this.queryField.value
  }

  limparPesquisa(){
    this.queryField.reset()
  }

}

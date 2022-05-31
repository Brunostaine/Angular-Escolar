import { AlunosService } from './../alunos.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Alunos } from '../alunos-model';

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
    // console.log(this.queryField.value)
    let value = this.queryField.value;
    if(value && value.trim() !== '') {
      // value = value.trim()
      value = this.AlunosService.search().subscribe( (res) => {
        value = res
        console.log(value)
      })
    }
  }

  limparPesquisa(){
    this.queryField.reset()
  }

}

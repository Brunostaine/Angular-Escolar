import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

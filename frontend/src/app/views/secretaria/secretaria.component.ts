import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {
  // INPUTS

    alunos: string = 'Alunos'
    linkAlunos: string = '/alunos'
    imgAlunos: string = '/assets/img/alunos.jpg'

    turmas: string = 'Turmas'
    linkTurmas: string = '/turmas'
    imgTurmas: string = '/assets/img/alunos.jpg'

    matricula: string = 'Matricula'
    linkMatricula: string = '/matricula'
    imgMatricula: string = '/assets/img/alunos.jpg'

    periodo: string = 'Período Letivo'
    linkPeriodo: string = '/periodo'
    imgPeriodo: string = '/assets/img/alunos.jpg'



  constructor() { }

  ngOnInit(): void {
  }

}

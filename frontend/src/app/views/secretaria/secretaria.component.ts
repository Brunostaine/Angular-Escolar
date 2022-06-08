import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {
  // INPUTS

    alunos: string = 'Alunos'
    linkAlunos: string = '/secretaria/alunos'
    imgAlunos: string = '/assets/img/alunos.jpg'

    turmas: string = 'Turmas'
    linkTurmas: string = '/secretaria/turmas'
    imgTurmas: string = '/assets/img/alunos.jpg'

    matricula: string = 'Matricula'
    linkMatricula: string = '/secretaria/alunos/matricula'
    imgMatricula: string = '/assets/img/alunos.jpg'

    periodo: string = 'Período Letivo'
    linkPeriodo: string = '/secretaria/periodo'
    imgPeriodo: string = '/assets/img/alunos.jpg'



  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  nameHeader: string = 'Secretaria'
  
  alunos: string = 'Alunos'
  imgAlunos: string = '/assets/img/alunos.jpg'
  funcionarios: string = 'Funcionários'
  imgFuncinarios: string = '/assets/img/funcionarios.png'

  buttomAdicionar: string = 'Adicionar Alunos'

  constructor() { }

  ngOnInit(): void {
  }

}

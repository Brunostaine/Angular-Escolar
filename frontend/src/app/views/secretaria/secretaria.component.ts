import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {
  // INPUTS
  nameHeader: string = 'Secretaria'

  alunos: string = 'Alunos'
  linkAlunos: string = '/alunos'
  imgAlunos: string = '/assets/img/alunos.jpg'

  linkFuncionarios: string = '/funcionarios'
  funcionarios: string = 'Funcionários'
  imgFuncinarios: string = '/assets/img/funcionarios.png'

  



  constructor() { }

  ngOnInit(): void {
  }

}

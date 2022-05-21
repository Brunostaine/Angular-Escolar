import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {
  
  alunos: string = 'Alunos'
  funcionarios: string = 'Funcionários'
  
  buttomAdicionar: string = 'Adicionar Alunos'

  constructor() { }

  ngOnInit(): void {
  }

}

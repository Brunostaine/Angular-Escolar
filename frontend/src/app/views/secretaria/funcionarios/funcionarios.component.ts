import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  title: string = 'Funcionários'
  funcionario: string = '/funcionarios'

  constructor() { }

  ngOnInit(): void {
  }

}

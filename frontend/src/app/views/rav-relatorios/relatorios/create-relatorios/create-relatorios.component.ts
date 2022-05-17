import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-relatorios',
  templateUrl: './create-relatorios.component.html',
  styleUrls: ['./create-relatorios.component.css']
})
export class CreateRelatoriosComponent implements OnInit {

  pergunta = {
    perguntas: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}

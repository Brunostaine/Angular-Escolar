import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-adicionar',
  templateUrl: './botao-adicionar.component.html',
  styleUrls: ['./botao-adicionar.component.css']
})
export class BotaoAdicionarComponent implements OnInit {

  @Input('nome') buttomAdicionar: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}

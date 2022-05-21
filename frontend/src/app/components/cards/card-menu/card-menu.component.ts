import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  @Input('nome') alunos: string = '';
  @Input('nome') funcionarios: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

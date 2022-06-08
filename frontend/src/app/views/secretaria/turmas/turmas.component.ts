import { Component, OnInit } from '@angular/core';

import { TurmasService } from './../../../services/turmas.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

    turmas: string[] = []
    displayedColumns: string[] = ['id', 'name', 'acoes'];

  constructor(
      private turmasService: TurmasService,
      
  ) { }

  ngOnInit(): void {
  }



}

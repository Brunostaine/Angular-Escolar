import { Aluno } from './../alunos-model';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {

  alunos!: Aluno[];

  displayedColumns = ['id', 'name', 'turma']

  constructor(private alunosService: AlunosService) { }

  

  ngOnInit(): void {
    this.alunosService.listAlunos().subscribe(alunos => {
      this.alunos = alunos;
      // console.log(alunos)
    })
  }

}

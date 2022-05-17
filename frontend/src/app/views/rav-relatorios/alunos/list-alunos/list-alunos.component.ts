import { Router } from '@angular/router';
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

  displayedColumns = ['id', 'name', 'turma', 'actions']

  constructor(private alunosService: AlunosService, private router: Router) { }

  

  ngOnInit(): void {
    this.alunosService.listAlunos().subscribe(alunos => {
      this.alunos = alunos;
      // console.log(alunos)
    })
  }

  delete(id: any) {
    this.alunosService.delete(id).subscribe(() => {
      this.alunosService.message('Aluno excluido com sucesso!')
      location.reload()
    })
  }
}

import { Aluno } from './../alunos-model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-create-alunos',
  templateUrl: './create-alunos.component.html',
  styleUrls: ['./create-alunos.component.css']
})
export class CreateAlunosComponent implements OnInit {

  aluno: Aluno = {
    name: '',
    turma: ''
  }

  constructor(
    private alunosService: AlunosService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createAluno(): void {
    this.alunosService.create(this.aluno).subscribe(()=> {
      this.alunosService.message('Aluno cadastrado com sucesso!')
      this.router.navigate(['/rav/alunos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/rav'])
  }

}

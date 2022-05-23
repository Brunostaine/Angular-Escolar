import { Component, OnInit } from '@angular/core';

import { Alunos } from './../alunos-model';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

alunos: Alunos[] = [];

displayedColumns: string[] = ['id', 'name', 'turma', 'acao'];

constructor( private alunosService: AlunosService) { }

ngOnInit(): void {
  this.alunosService.read().subscribe((alunos) => {
    this.alunos = alunos;
    console.log(alunos)
  })
}

create(): void {
  this.alunosService.showMessage('Aluno cadastrado com sucesso!')
}

delete(): void {
  this.alunosService.showMessage('Aluno deletado com sucesso!')
}

post(): void {
  this.alunosService.showMessage('Cadastro editado com sucesso!')
}

}

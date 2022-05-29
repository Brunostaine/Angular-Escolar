import { Alunos } from './../../views/secretaria/alunos/alunos-model';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from './../../views/secretaria/alunos/alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  aluno: Alunos = {
    nome: '',
    dataNascimento: '',
    nomeMae: '',
    nacionalidade: '',
    cpf: '',
    email: '',
    telefoneResponsavel: '',
    telefoneResponsavel2: '',
    tipoSanguineo: '',
    serie: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    estado: ''
  };

  constructor(private alunosService: AlunosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.alunosService.readById(id).subscribe(aluno => {
      this.aluno = aluno
    })
  }

}

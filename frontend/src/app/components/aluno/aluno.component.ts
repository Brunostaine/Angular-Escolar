import { Alunos } from '../../models/alunos-model';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../../services/alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  aluno: Alunos = {
    nome: '',
    turma: '',
    dataNascimento: '',
    nomeMae: '',
    nomePai: '',
    nacionalidade: '',
    cpf: '',
    email: '',
    telefoneResponsavel: '',
    telefoneResponsavel2: '',
    tipoSanguineo: '',
    serie: '',

    sexo: '',
    estadoCivil: '',
    localNascimento: '',
    cor: '',
    idade: '',
    necessidadesEspeciais: '',
    rg: '',
    orgaoExpedidor: '',
    dataExpedicao: '',
    uf: '',

    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
  };

  constructor(private alunosService: AlunosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.alunosService.readById(id).subscribe(aluno => {
      this.aluno = aluno
    })
  }

}

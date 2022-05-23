import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alunos } from '../alunos-model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-create-alunos',
  templateUrl: './create-alunos.component.html',
  styleUrls: ['./create-alunos.component.css']
})
export class CreateAlunosComponent implements OnInit {

  salvar: string = 'Salvar'
  backgroundSalvar: string = 'salvar'

  cancelar: string = 'Cancelar'
  backgroundCancelar: string = 'cancelar'

  aluno: Alunos = {
    nome: '',
    turma: '',
    dataNascimento: '',
    nomeMae: '',
    nomePai: '',
    nascionalidade: '',
    cpf: '',
    email: '',
    telefoneResponsavel: '',
    telefoneResponsavel2: '',
    tipoSanguineo: '',
    serie: '',
        
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
  }

  constructor(private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    
  }

  save(){
    this.alunosService.create(this.aluno).subscribe((aluno) => {
      this.aluno = aluno
      
    })
    this.alunosService.showMessage('Aluno cadastrado com sucesso!')
    this.router.navigate(['/alunos'])
  }

  cancel(){
    this.router.navigate(['/alunos'])
  }

}

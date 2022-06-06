import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alunos } from '../../../../models/alunos-model';
import { AlunosService } from '../../../../services/alunos.service';

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
  }

  constructor(private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    
  }

  save(){

    if(this.aluno.nome !== ''){
    this.alunosService.create(this.aluno).subscribe((aluno) => {
      this.aluno = aluno
      this.router.navigate(['/secretaria/alunos'])
      
    })
      this.alunosService.showMessage('Aluno cadastrado com sucesso!')
  }
}

  cancel(){
      this.router.navigate(['/secretaria/alunos'])
    
  }

}

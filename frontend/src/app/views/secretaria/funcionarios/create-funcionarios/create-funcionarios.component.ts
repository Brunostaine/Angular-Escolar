import { Router } from '@angular/router';
import { FuncionariosService } from './../funcionarios.service';
import { Funcionarios } from './../funcionarios-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-funcionarios',
  templateUrl: './create-funcionarios.component.html',
  styleUrls: ['./create-funcionarios.component.css']
})
export class CreateFuncionariosComponent implements OnInit {

  salvar: string = 'Salvar'
  backgroundSalvar: string = 'salvar'

  cancelar: string = 'Cancelar'
  backgroundCancelar: string = 'cancelar'

  funcionario: Funcionarios = {
    
    nome: '',
    dataNascimento: '',
    localNascimento: '',
    idade: '',
    nacionalidade: '',
    cpf: '',
    rg: '',
    orgaoExpedidor: '',
    dataExpedicao: '',
    uf: '',
    email: '',
    telefone: '',
    telefone2: '',
    tipoSanguineo: '',
    sexo: '',
    estadoCivil: '',
    formacao: '',
    cargo: '',

    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: ''
  }

  constructor(private funcionariosService: FuncionariosService, private router: Router) { }

  ngOnInit(): void {
  }

save(){
    if(this.funcionario.nome  !== ''){
      this.funcionariosService.create(this.funcionario).subscribe((funcionario) => {
        this.funcionario = funcionario
        this.router.navigate(['/secretaria/funcionarios'])
        
      })
        this.funcionariosService.showMessage('Funcionário cadastrado com sucesso!')
  }
}

cancel(){
  this.router.navigate(['/secretaria/funcionarios'])
}
}
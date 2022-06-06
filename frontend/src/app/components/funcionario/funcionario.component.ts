import { ActivatedRoute } from '@angular/router';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Funcionarios } from '../../models/funcionarios-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
    funcionario: Funcionarios = {
    
        name: '',
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

  constructor(private funcionariosService: FuncionariosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.funcionariosService.readById(id).subscribe(res => {
      this.funcionario = res
    })
  }

}

import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../../../../services/funcionarios.service';
import { Funcionarios } from '../../../../models/funcionarios-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-funcionarios',
  templateUrl: './update-funcionarios.component.html',
  styleUrls: ['./update-funcionarios.component.css']
})
export class UpdateFuncionariosComponent implements OnInit {

    atualizar: string = 'Atualizar'
    backgroundAtualizar: string = 'atualizar'

    cancelar: string = 'Cancelar'
    backgroundCancelar: string = 'cancelar'
    
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

  constructor(private funcionariosService: FuncionariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionariosService.readById(id).subscribe(res => {
      this.funcionario = res;
    })
  }

  updateAluno(){
    this.funcionariosService.update(this.funcionario).subscribe( () => {
        this.funcionariosService.showMessage('Atualizado com sucesso!')
        this.router.navigate(['/secretaria/funcionarios'])
      })
  }

  cancel(){
    this.router.navigate(['/secretaria/funcionarios'])
  }

}

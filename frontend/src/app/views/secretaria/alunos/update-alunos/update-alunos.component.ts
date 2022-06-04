import { AlunosService } from './../alunos.service';
import { Alunos } from './../alunos-model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-update-alunos',
  templateUrl: './update-alunos.component.html',
  styleUrls: ['./update-alunos.component.css']
})
export class UpdateAlunosComponent implements OnInit {

  atualizar: string = 'Atualizar'
  backgroundAtualizar: string = 'atualizar'

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

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.alunosService.readById(id).subscribe(aluno => {
      this.aluno = aluno;
    })
  }

  updateAluno(): void{
    this.alunosService.update(this.aluno).subscribe( () => {
      this.alunosService.showMessage('Atualizado com sucesso!')
      this.router.navigate(['/secretaria/alunos'])
    })
    
  }

  cancel(){
    this.router.navigate(['/secretaria/alunos'])
  }

}

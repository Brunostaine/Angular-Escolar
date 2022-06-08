import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Alunos } from './../../../../models/alunos-model';
import { AlunosService } from './../../../../services/alunos.service';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

    btn: string = 'Salvar'
    background: string = 'salvar'

    btnCancel: string = 'Cancelar'
    backgroundCancel: string = 'cancelar'
    
    formulario: Alunos = {
        nome: '',
        email: '',
        cpf: '',
        rg: '',
        nomeMae: '',
        nomePai: '',
        sexo: '',
        cor: '',
        telefoneResponsavel: '',
        telefoneResponsavel2: '',
        dataNascimento: '',
        idade: '',
        tipoSanguineo: '',
        necessidadesEspeciais: '',
        nacionalidade: '',
        serie: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        estado: ''
    }

  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
        this.alunosService.readById(id).subscribe(aluno => {
          this.formulario = aluno 

            
    })
}

  update(){
    this.alunosService.update(this.formulario).subscribe(()=>{
        this.alunosService.showMessage('Atualizado com sucesso')
        this.router.navigate(['/secretaria/alunos'])
    })
  }

  cancel(){
    this.router.navigate(['/secretaria/alunos'])
  }

}

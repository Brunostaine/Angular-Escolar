import { AlunosService } from './../../../services/alunos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

    btn: string = 'Salvar'
    background: string = 'salvar'

    btnCancel: string = 'Cancelar'
    backgroundCancel: string = 'cancelar'

    formulario!: FormGroup;

    constructor(
        private formBuilder: FormBuilder, 
        private router: Router,
        private AlunosService: AlunosService
        ) { }

    ngOnInit(): void {
        this.formulario = this.formBuilder.group({
            nome: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            cpf: [null],
            rg: [null],
            nomeMae: [null, Validators.required],
            nomePai: [null],
            sexo: [null, Validators.required],
            raca: [null, Validators.required],
            telefone: [null, Validators.required],
            telefone2: [null],
            dataNascimento: [null, Validators.required],
            idade: [null],
            tipoSanguineo: [null, Validators.required],
            necessidadesEspeciais: [null, Validators.required],
        })

        
    }

    enviar(): void {
        if(this.formulario.valid){
            this.AlunosService.create(this.formulario.value).subscribe(
                success => {
                    this.AlunosService.showMessage('Matricula efetuada com sucesso!')
                },
                error => {
                    this.AlunosService.showMessage('Ocorreu um erro, tente novamente mais tarde!')
                }
            )
            
            
        } else 
        this.AlunosService.showMessage('Preencha os campos obrigatórios para concluir a matricula.')
            
    }

    cancel(): void {
        this.router.navigate(['/secretaria'])
    }
    
    

}

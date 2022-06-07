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

    constructor(private formBuilder: FormBuilder, private router: Router) { }

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
            console.log('valid')
        } else 
            console.log('Invalido')
    }

    cancel(): void {
        this.router.navigate(['/secretaria'])
    }
    
    

}

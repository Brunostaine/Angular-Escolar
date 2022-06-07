import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

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
            sexo: [null],
            raca: [null],
            telefone: [null],
            telefone2: [null],
            dataNascimento: [null],
            idade: [null],
            tipoSanguineo: [null],
            necessidadesEspeciais: [null],
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

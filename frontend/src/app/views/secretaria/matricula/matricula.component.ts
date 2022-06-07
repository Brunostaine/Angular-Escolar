import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
            nome: [null],
            email: [null]
        })

        console.log(this.formulario)
    }

    enviar(): void {
        console.log(this.formulario.value)
    }

    cancel(): void {
        this.router.navigate(['/secretaria'])
    }

}

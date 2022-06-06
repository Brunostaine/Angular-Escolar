import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

    formulario!: FormGroup;

constructor(private formBuilder: FormBuilder) { }

ngOnInit(): void {
    this.formulario = this.formBuilder.group({
        nome: [null],
        email: [null]
    })
}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-create-alunos',
  templateUrl: './create-alunos.component.html',
  styleUrls: ['./create-alunos.component.css']
})
export class CreateAlunosComponent implements OnInit {

  salvar: string = 'Salvar'
  cancelar: string = 'Cancelar'

  constructor(private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    
  }

}

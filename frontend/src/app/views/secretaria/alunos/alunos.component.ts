import { Alunos } from './../../../models/alunos-model';
import { AlunosService } from './../../../services/alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

    formulario: Alunos[] = []

    displayedColumns: string[] = ['id', 'nome', 'acao'];
    

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunosService.read().subscribe( result => {
        this.formulario = result;
    })
  }

}

import { ActivatedRoute } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Alunos } from '../alunos-model';

@Component({
  selector: 'app-read-aluno',
  templateUrl: './read-aluno.component.html',
  styleUrls: ['./read-aluno.component.css']
})
export class ReadAlunoComponent implements OnInit {

  

  constructor(private alunosService: AlunosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}

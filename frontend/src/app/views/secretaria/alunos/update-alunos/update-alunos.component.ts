import { AlunosService } from './../alunos.service';
import { Alunos } from './../alunos-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  aluno?: Alunos;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.alunosService.readById(id).subscribe(aluno => {
      this.aluno = aluno;
    })
  }

  cancel(){
    this.router.navigate(['/secretaria/alunos'])
  }

}

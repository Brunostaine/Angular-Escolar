import { Aluno } from './../alunos-model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-alunos',
  templateUrl: './update-alunos.component.html',
  styleUrls: ['./update-alunos.component.css']
})
export class UpdateAlunosComponent implements OnInit {

  alunos!: Aluno;

  constructor(
    private alunosService: AlunosService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.alunosService.ListAlunosById(id).subscribe(aluno => {
      this.alunos = aluno
    })
  }

  updateAluno(): void {
    this.alunosService.update(this.alunos).subscribe(() => {
      this.alunosService.message('Dados atualizados com sucesso !')
      this.router.navigate(['/rav/alunos'])
    })
  }

  cancel(): void{
    this.router.navigate(['/rav/alunos'])
  }

}

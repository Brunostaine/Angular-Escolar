import { AlunosService } from './../alunos.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'turma'];
  dataSource: any

  table = {
    id:  1,
    nome: 'teste',
    turma: '1A'
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  

  constructor( private alunosService: AlunosService,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {

  }

  create(): void {
    this.alunosService.showMessage('Aluno cadastrado com sucesso!')
  }

  delete(): void {
    this.alunosService.showMessage('Aluno deletado com sucesso!')
  }

  post(): void {
    this.alunosService.showMessage('Cadastro editado com sucesso!')
  }

}

import { Router } from '@angular/router';
import { Alunos } from './../../../models/alunos-model';
import { AlunosService } from './../../../services/alunos.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

    formulario: Alunos[] = []

    displayedColumns: string[] = ['id', 'nome', 'acao'];
    

    constructor(private alunosService: AlunosService, private router: Router) { }

    ngOnInit(): void {
    this.alunosService.read().subscribe( result => {
        this.formulario = result;
    })
    }

    visualizar(id: any) {
        this.alunosService.readById(id).subscribe(result => {
            
        })
    }

    editar(id: any) {
        
    }

    deletar(id: any) {
        this.alunosService.delete(id).subscribe(
            success => {
                this.alunosService.showMessage('Aluno excluído com sucesso')
                delay(4000)
                location.reload()
            })
    }


}

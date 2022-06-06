import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DialogConfirmComponent } from './../../../../components/dialog-confirm/dialog-confirm.component';
import { Alunos } from '../../../../models/alunos-model';
import { AlunosService } from '../../../../services/alunos.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

alunos: Alunos[] = [];

displayedColumns: string[] = ['id', 'name', 'serie', 'acao'];

constructor( private alunosService: AlunosService, private matDialog: MatDialog, private router: Router) { }

ngOnInit(): void {
  this.alunosService.read().subscribe((alunos) => {
    this.alunos = alunos;
  })
}

refresh() {
  location.reload()
}

create(): void {
  this.alunosService.showMessage('Aluno cadastrado com sucesso!')
}

delete(id: any) {
  const dialogReference = this.matDialog.open(DialogConfirmComponent);
        dialogReference.afterClosed().subscribe(valorResponse => {

    if(valorResponse) {
        this.alunosService.delete(id).subscribe(
          success => {
            this.alunosService.showMessage('Aluno deletado!')
          }
        )
        
      }

  })
  
  // this.alunosService.showMessage('Aluno deletado com sucesso!')
}

post(): void {
  this.alunosService.showMessage('Cadastro editado com sucesso!')
}

}

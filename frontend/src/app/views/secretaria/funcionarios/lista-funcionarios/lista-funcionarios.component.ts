import { MatDialog } from '@angular/material/dialog';
import { Funcionarios } from '../../../../models/funcionarios-model';
import { FuncionariosService } from '../../../../services/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {

    funcionarios: Funcionarios[] = [];
    displayedColumns: string[] = ['id', 'name', 'cargo', 'acao'];

    constructor(private funcionariosService: FuncionariosService, private matDialog: MatDialog) { }

    ngOnInit(): void {
        this.funcionariosService.read().subscribe((res) => {
            this.funcionarios = res;
        })
    }

    delete(id: any){
        this.funcionariosService.delete(id).subscribe(() => {
            this.funcionariosService.showMessage('Colaborador deletado!')
        })
            setTimeout(()=>{ location.reload() }, 3000) //Atrasa o reload
    }

}

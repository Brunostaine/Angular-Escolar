import { Router } from '@angular/router';
import { RelatoriosService } from './../relatorios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-relatorios',
  templateUrl: './list-relatorios.component.html',
  styleUrls: ['./list-relatorios.component.css']
})
export class ListRelatoriosComponent implements OnInit {

  relatorios!: any

  displayedColumns = ['id', 'name', 'turma', 'actions']

  constructor(
    private relatoriosService: RelatoriosService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.relatoriosService.listRelatorio().subscribe(relatorio => {
            this.relatorios = relatorio
            console.log(relatorio)
    })
  }

  navegateCreaterelatorio(){
    this.router.navigate(['rav/relatorio/create'])
  }

}

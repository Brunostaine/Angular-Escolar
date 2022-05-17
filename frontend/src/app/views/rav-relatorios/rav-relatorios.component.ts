import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rav-relatorios',
  templateUrl: './rav-relatorios.component.html',
  styleUrls: ['./rav-relatorios.component.css']
})
export class RavRelatoriosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegateCreateAluno(){
    this.router.navigate(['rav/aluno/create'])
  }

}
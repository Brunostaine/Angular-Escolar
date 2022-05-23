import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { Alunos } from './alunos-model';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  urlAlunos = 'http://localhost:3001/alunos'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string){
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  create(aluno: Alunos): Observable<Alunos> {
    return this.http.post<Alunos>(this.urlAlunos, aluno)
  }

  read(): Observable<Alunos[]> {
    return this.http.get<Alunos[]>(this.urlAlunos);
  }

  



  
}

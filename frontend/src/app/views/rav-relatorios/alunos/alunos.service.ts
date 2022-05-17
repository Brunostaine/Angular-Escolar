import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Aluno } from './alunos-model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

      baseURL = 'http://localhost:3001/alunos'

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  message(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseURL, aluno)
  }

  listAlunos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.baseURL)
  }
}

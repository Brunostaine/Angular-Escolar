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
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      
    })
  }
      // Criar um aluno na base de dados
  create(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseURL, aluno)
  }
      //  Lista alunos no list alunos da página RAV/ALUNOS
  listAlunos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.baseURL)
  }
      //  Busca o id do Aluno
  ListAlunosById(id: any): Observable<Aluno> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Aluno>(url)
  }
  
  update(aluno: Aluno): Observable<Aluno> {
    const url = `${this.baseURL}/${aluno.id}`
    return this.http.put<Aluno>(url, aluno)
  }
}

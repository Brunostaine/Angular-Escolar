import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { Alunos } from '../models/alunos-model';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  urlAlunos = 'http://localhost:3001/alunos'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  search(): Observable<Alunos>{
    return this.http.get<Alunos>(this.urlAlunos)
  }

  create(aluno: Alunos): Observable<Alunos> {
    return this.http.post<Alunos>(this.urlAlunos, aluno);
  }

  read(): Observable<Alunos[]> {
    return this.http.get<Alunos[]>(this.urlAlunos);
  }

  readById(id: any): Observable<Alunos> {
    const url = ` ${this.urlAlunos}/${id}`;
    return this.http.get<Alunos>(url);
  }

  update(aluno: Alunos): Observable<Alunos> {
    const url = `${this.urlAlunos}/${aluno.id}`;
    return this.http.put<Alunos>(url, aluno);
  }

  delete(id: any): Observable<Alunos> {
    const url = `${this.urlAlunos}/${id}`;
    return this.http.delete<Alunos>(url)
  }

  showMessage(msg: string){
    this.snackBar.open(msg, '', {
      
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      
    })
  }


}

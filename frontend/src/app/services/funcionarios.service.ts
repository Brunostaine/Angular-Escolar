import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Funcionarios } from '../models/funcionarios-model';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  urlFuncionarios = 'http://localhost:3001/funcionarios'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  create(funcionario: Funcionarios): Observable<Funcionarios> {
    return this.http.post<Funcionarios>(this.urlFuncionarios, funcionario);
  }

  read(): Observable<Funcionarios[]> {
      return this.http.get<Funcionarios[]>(this.urlFuncionarios)
  }

  readById(id: any): Observable<Funcionarios> {
    const url = ` ${this.urlFuncionarios}/${id}`;
    return this.http.get<Funcionarios>(url);
  }

  update(funcionario: Funcionarios): Observable<Funcionarios> {
    const url = `${this.urlFuncionarios}/${funcionario.id}`;
    return this.http.put<Funcionarios>(url, funcionario);
  }

  delete(id: any): Observable<Funcionarios> {
    const url = `${this.urlFuncionarios}/${id}`;
    return this.http.delete<Funcionarios>(url)
  }

  showMessage(msg: string){
    this.snackBar.open(msg, '', {
      
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      
    })
  }
}

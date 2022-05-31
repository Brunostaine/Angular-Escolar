import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Funcionarios } from './funcionarios-model';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  urlFuncionarios = ''

  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }

  create(funcionario: Funcionarios): Observable<Funcionarios> {
    return this.http.post<Funcionarios>(this.urlFuncionarios, funcionario);
  }

  showMessage(msg: string){
    this.snackBar.open(msg, '', {
      
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      
    })
  }
}

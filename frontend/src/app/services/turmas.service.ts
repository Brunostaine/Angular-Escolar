import { Observable } from 'rxjs';
import { Turma } from './../models/turma-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

    baseURL = 'http://localhost:3001/turmas'

  constructor(
      private http: HttpClient, 
      private snackBar: MatSnackBar
    ) { }

    create(turma: Turma): Observable<Turma>{
        return this.http.post<Turma>(this.baseURL, turma)
    }

    showMessage(msg: string) {
        this.snackBar.open(msg, '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        })
    }
}

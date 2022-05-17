import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {


  baseURL = 'http://localhost:3001/perguntas'

  constructor(
    private http: HttpClient, 
    private snackBar: MatSnackBar
  ) { }

  message(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

  create(relatorio: any): Observable<any>{
    return this.http.post<any>(this.baseURL, relatorio)
  }

  listRelatorio(): Observable<any>{
    return this.http.get(this.baseURL)
  }

  
}
